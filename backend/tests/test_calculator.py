import server.calculator as calculator
import json


def test_calculate_fixed_rate():
    assert calculator.calculate_fixed_rate(
        credit_amount=100000, loan_term=10, interest_rate=3
    ) == {
        "monthly_payment": [965.61] * 120,
        "total_cost": 115873.2,
        "total_interest": 15873.2,
    }


def test_calculate_descending_rate():
    f = open("tests/output/test_calculator_output.json")
    data = json.load(f)
    f.close()
    assert calculator.calculate_descending_rate(
        credit_amount=100000, loan_term=10, interest_rate=3
    ) == {
        "monthly_payment": data["monthly_payment"],
        "total_cost": data["total_cost"],
        "total_interest": data["total_interest"],
    }
