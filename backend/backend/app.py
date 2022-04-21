from flask import Flask
from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
api = Api(app)

mortgageCalculator_put_args = reqparse.RequestParser()
# 1
mortgageCalculator_put_args.add_argument(
    "interest_type", type=str, help="Interest type is required", required=True
)
# 2
mortgageCalculator_put_args.add_argument(
    "installment_type", type=str, help="Installment type is required", required=True
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
    MONTHS_IN_YEAR = 12

    def calculate_fixed_rate(self, credit_amount, loan_term, interest_rate):
        interest_rate = interest_rate / 100
        loan_term_months = loan_term * self.MONTHS_IN_YEAR
        payment = (credit_amount * interest_rate) / (
            self.MONTHS_IN_YEAR
            * (
                1
                - (self.MONTHS_IN_YEAR / (self.MONTHS_IN_YEAR + interest_rate))
                ** loan_term_months
            )
        )
        base_monthly_payment = round(payment, 2)
        return base_monthly_payment

    def calculate_descending_rate(self, credit_amount, loan_term, interest_rate):
        interest_rate = interest_rate / 100
        base_monthly_payment = []
        loan_term_months = loan_term * self.MONTHS_IN_YEAR
        for i in range(loan_term_months):
            payment = (credit_amount / loan_term_months) * (
                1 + (loan_term_months - i) * (interest_rate / self.MONTHS_IN_YEAR)
            )
            base_monthly_payment.append(round(payment, 2))
        return base_monthly_payment

    def calculate_mortgage(self, args):
        if args["installment_type"] == "fixed":
            base_monthly_payment = self.calculate_fixed_rate(
                args["credit_amount"], args["loan_term"], args["interest_rate"]
            )
        elif args["installment_type"] == "descending":
            base_monthly_payment = self.calculate_descending_rate(
                args["credit_amount"], args["loan_term"], args["interest_rate"]
            )
        else:
            abort(404, message="Invalid installment type")

        mortgage_serialized = {"monthly_payment": base_monthly_payment}
        return mortgage_serialized

    def put(self):
        args = mortgageCalculator_put_args.parse_args()
        mortgage = self.calculate_mortgage(args)
        return mortgage, 201


api.add_resource(MortgageCalculator, "/mortgageCalculator")
