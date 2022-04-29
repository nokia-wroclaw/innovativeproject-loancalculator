from flask import Flask
from flask_restful import Api, Resource, reqparse, abort
import backend.calculator as calculator

app = Flask(__name__)
api = Api(app)

mortgageCalculator_put_args = reqparse.RequestParser()
# 1
mortgageCalculator_put_args.add_argument(
    "interest_type", type=str, help="Interest type is required", required=True
)
# 2
mortgageCalculator_put_args.add_argument(
    "installment_type",
    type=str,
    choices=("fixed", "descending"),
    help='Installment type must be "fixed" or "descending"',
    required=True,
)
# 3
mortgageCalculator_put_args.add_argument(
    "mortgage_value", type=int, help="Mortgage value is required", required=True
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
    def calculate_mortgage(self, kwargs):
        if kwargs["installment_type"] == "fixed":
            base_monthly_payment = calculator.calculate_fixed_rate(
                kwargs["credit_amount"], kwargs["loan_term"], kwargs["interest_rate"]
            )
        elif kwargs["installment_type"] == "descending":
            base_monthly_payment = calculator.calculate_descending_rate(
                kwargs["credit_amount"], kwargs["loan_term"], kwargs["interest_rate"]
            )

        mortgage_serialized = {"monthly_payment": base_monthly_payment}
        return mortgage_serialized

    def put(self):
        kwargs = mortgageCalculator_put_args.parse_args()
        mortgage = self.calculate_mortgage(kwargs)
        return mortgage, 201


api.add_resource(MortgageCalculator, "/mortgageCalculator")
