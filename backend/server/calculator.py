MONTHS_IN_YEAR = 12


def calculate_fixed_rate(credit_amount, loan_term, interest_rate):
    interest_rate = interest_rate / 100
    loan_term_months = loan_term * MONTHS_IN_YEAR
    payment = (credit_amount * interest_rate) / (
        MONTHS_IN_YEAR
        * (1 - (MONTHS_IN_YEAR / (MONTHS_IN_YEAR + interest_rate)) ** loan_term_months)
    )
    base_monthly_payment = round(payment, 2)
    return base_monthly_payment


def calculate_descending_rate(credit_amount, loan_term, interest_rate):
    interest_rate = interest_rate / 100
    base_monthly_payment = []
    loan_term_months = loan_term * MONTHS_IN_YEAR
    for i in range(loan_term_months):
        payment = (credit_amount / loan_term_months) * (
            1 + (loan_term_months - i) * (interest_rate / MONTHS_IN_YEAR)
        )
        base_monthly_payment.append(round(payment, 2))
    return base_monthly_payment
