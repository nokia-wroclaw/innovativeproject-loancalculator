from flask import Flask
from flask_restful import Resource, reqparse, abort
from server.calculator import calculate_fixed_rate, calculate_descending_rate
from server.db import Db

app = Flask(__name__)
db = Db(app)

mortgageCalculator_put_args = reqparse.RequestParser()
# 1
mortgageCalculator_put_args.add_argument(
    "interest_type",
    type=str,
    choices=("fixed", "WIBOR"),
    help='Interest type must be "fixed" or "WIBOR"',
    required=True,
)
# 2
mortgageCalculator_put_args.add_argument(
    "installment_type",
    type=str,
    choices=("fixed", "descending"),
    help='Installment type must be "fixed" or "descending"',
    required=True,
)
# 4
mortgageCalculator_put_args.add_argument(
    "down_payment", type=int, help="Own's contribution is required", required=True
)
# 5
mortgageCalculator_put_args.add_argument(
    "credit_amount", type=int, help="Credit value is required", required=True
)
# 6
mortgageCalculator_put_args.add_argument(
    "loan_term", type=int, help="Loan term is required", required=True
)
# 7
mortgageCalculator_put_args.add_argument(
    "interest_rate", type=int, help="Interest rate is required", required=True
)
# 8
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
                base_monthly_payment = calculate_fixed_rate(
                    credit_amount, loan_term, interest_rate
                )
                return {"monthly_payment": base_monthly_payment}

            base_monthly_payment = calculate_descending_rate(
                credit_amount, loan_term, interest_rate
            )
            return {"monthly_payment": base_monthly_payment}

        abort(500, message="not implemented")

    def put(self):

        user_params = mortgageCalculator_put_args.parse_args()

        interest_type = user_params["interest_type"]
        installment_type = user_params["installment_type"]
        credit_amount = user_params["credit_amount"]
        loan_term = user_params["loan_term"]
        interest_rate = user_params["interest_rate"]

        self.validate_values(credit_amount, loan_term, interest_rate)
        mortgage = self.calculate_mortgage(
            interest_type, installment_type, credit_amount, loan_term, interest_rate
        )
        db.insert_user_logs(user_params)
        return mortgage, 201


db.api.add_resource(MortgageCalculator, "/mortgageCalculator")
