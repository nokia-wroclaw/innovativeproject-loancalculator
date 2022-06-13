from urllib import response
from flask import Flask
from flask_restful import Resource, reqparse, abort
from server.calculator import calculate_fixed_rate, calculate_descending_rate
from server.db import Db


app = Flask(__name__)
db = Db(app)


mortgageCalculator_get_args = reqparse.RequestParser()

mortgageCalculator_get_args.add_argument(
    "user_id", type=str, help="User id is required", required=True
)

mortgageCalculator_put_args = reqparse.RequestParser()

mortgageCalculator_put_args.add_argument(
    "interest_type",
    type=str,
    choices=("fixed", "WIBOR"),
    help='Interest type must be "fixed" or "WIBOR"',
    required=True,
)

mortgageCalculator_put_args.add_argument(
    "installment_type",
    type=str,
    choices=("fixed", "descending"),
    help='Installment type must be "fixed" or "descending"',
    required=True,
)

mortgageCalculator_put_args.add_argument(
    "down_payment", type=int, help="Own's contribution is required", required=True
)

mortgageCalculator_put_args.add_argument(
    "credit_amount", type=int, help="Credit value is required", required=True
)

mortgageCalculator_put_args.add_argument(
    "loan_term", type=int, help="Loan term is required", required=True
)

mortgageCalculator_put_args.add_argument(
    "interest_rate", type=int, help="Interest rate is required"
)

mortgageCalculator_put_args.add_argument(
    "commission", type=int, help="Commission is required", required=True
)


class MortgageCalculator(Resource):
    def validate_values(self, *args):
        for arg_value in args:
            if arg_value <= 0:
                abort(400, message={"arg_value": "Values below 1 are not valid"})

    def calculate_mortgage(
        self, interest_type, installment_type, credit_amount, loan_term, interest_rate
    ):
        if installment_type == "fixed":
            return calculate_fixed_rate(credit_amount, loan_term, interest_rate)

        return calculate_descending_rate(credit_amount, loan_term, interest_rate)

    def get(self):
        params = mortgageCalculator_get_args.parse_args()
        user_id = params["user_id"]

        user_data = db.get_user_data_by_id(user_id)

        return user_data, 200

    def put(self):

        user_params = mortgageCalculator_put_args.parse_args()

        interest_type = user_params["interest_type"]
        installment_type = user_params["installment_type"]
        down_payment = user_params["down_payment"]
        credit_amount = user_params["credit_amount"]
        loan_term = user_params["loan_term"]
        interest_rate = user_params["interest_rate"]
        commission = user_params["commission"]

        self.validate_values(credit_amount, loan_term, interest_rate)

        if interest_type == "WIBOR":
            interest_rate = float(db.get_most_recent_wibor()["WIBOR 6M"])

        credit_amount *= 1 + commission / 100

        baseline_time = self.calculate_mortgage(
            interest_type, installment_type, credit_amount, loan_term, interest_rate
        )

        five_years_more = self.calculate_mortgage(
            interest_type, installment_type, credit_amount, loan_term + 5, interest_rate
        )

        if loan_term >= 10:
            five_years_less = self.calculate_mortgage(
                interest_type,
                installment_type,
                credit_amount,
                loan_term - 5,
                interest_rate,
            )

        user_id = db.insert_user_logs(user_params)

        resp = {
            "user_id": user_id,
            "user_input": {
                "interest_type": interest_type,
                "installment_type": installment_type,
                "down_payment": down_payment,
                "credit_amount": credit_amount,
                "loan_term": loan_term,
                "interest_rate": interest_rate,
                "commission": commission,
            },
            "baseline_time": baseline_time,
            "five_years_more": five_years_more,
            "five_years_less": five_years_less,
        }

        return resp, 201


class WiborChart(Resource):
    def get(self):
        wibor_rates_list = db.get_all_wibors()

        list_3m = []
        list_6m = []

        for wibor_rates in wibor_rates_list:
            list_3m.append({"x": wibor_rates["date"], "y": wibor_rates["WIBOR 3M"]})
            list_6m.append({"x": wibor_rates["date"], "y": wibor_rates["WIBOR 6M"]})

        dict_3m = {"id": "WIBOR 3M", "data": list_3m}
        dict_6m = {"id": "WIBOR 6M", "data": list_6m}

        list_both = [dict_3m, dict_6m]

        return {"WIBOR CHART": list_both}, 201


class WiborTable(Resource):
    def get(self):
        table = db.get_most_recent_wibor()
        resp = {
            "date": table["date"],
            "WIBOR ON": table["WIBOR ON"],
            "WIBOR TN": table["WIBOR TN"],
            "WIBOR SW": table["WIBOR SW"],
            "WIBOR 1M": table["WIBOR 1M"],
            "WIBOR 3M": table["WIBOR 3M"],
            "WIBOR 6M": table["WIBOR 6M"],
            "WIBOR 1R": table["WIBOR 1R"],
        }
        return resp, 201


db.api.add_resource(MortgageCalculator, "/mortgageCalculator")
db.api.add_resource(WiborChart, "/wiborChart")
db.api.add_resource(WiborTable, "/wiborTable")
