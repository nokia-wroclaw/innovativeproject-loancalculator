import server.calculator as calculator
import json


def test_calculate_fixed_rate():
    assert calculator.calculate_fixed_rate(
        credit_amount=100000, loan_term=10, interest_rate=3
    ) == (965.61, 115873.2, 15873.2)


def test_calculate_descending_rate():
    f = open("tests/output/test_calculator_output.json")
    data = json.load(f)
    f.close()
    assert calculator.calculate_descending_rate(
        credit_amount=100000, loan_term=10, interest_rate=3
    ) == (data["monthly_payment"], data["total_cost"], data["total_interest"])
