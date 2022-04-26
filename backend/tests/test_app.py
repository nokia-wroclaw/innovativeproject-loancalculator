from backend.app import MortgageCalculator


mortgageCalculator = MortgageCalculator

def test_calculate_fixed_rate():
    assert mortgageCalculator.calculate_fixed_rate(self=mortgageCalculator, credit_amount=100000, loan_term=10, interest_rate=3) == 965.61
