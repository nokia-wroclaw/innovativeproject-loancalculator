from flask import Flask, request
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
    "interest_rate", type=int, help="Interest rate is required", required=True
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
        if interest_type == "fixed":
            if installment_type == "fixed":
                return calculate_fixed_rate(credit_amount, loan_term, interest_rate)

            return calculate_descending_rate(credit_amount, loan_term, interest_rate)

        abort(500, message="not implemented")

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
            "user_input": request.json,
            "baseline_time": baseline_time,
            "five_years_more": five_years_more,
            "five_years_less": five_years_less,
        }

        return resp, 201


db.api.add_resource(MortgageCalculator, "/mortgageCalculator")
