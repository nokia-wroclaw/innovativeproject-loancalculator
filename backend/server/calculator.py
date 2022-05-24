MONTHS_IN_YEAR = 12


def calculate_fixed_rate(credit_amount, loan_term, interest_rate):
    interest_rate = interest_rate / 100
    loan_term_months = loan_term * MONTHS_IN_YEAR
    payment = (credit_amount * interest_rate) / (
        MONTHS_IN_YEAR
        * (1 - (MONTHS_IN_YEAR / (MONTHS_IN_YEAR + interest_rate)) ** loan_term_months)
    )
    monthly_payment = round(payment, 2)
    total_cost = round(monthly_payment * loan_term_months, 2)
    total_interest = round(total_cost - credit_amount, 2)
    return {
        "monthly_payment": format_monthly_payment([monthly_payment] * loan_term_months),
        "total_cost": total_cost,
        "total_interest": total_interest,
    }


def calculate_descending_rate(credit_amount, loan_term, interest_rate):
    interest_rate = interest_rate / 100
    monthly_payment = []
    loan_term_months = loan_term * MONTHS_IN_YEAR
    total_cost = 0
    for i in range(loan_term_months):
        payment = (credit_amount / loan_term_months) * (
            1 + (loan_term_months - i) * (interest_rate / MONTHS_IN_YEAR)
        )
        monthly_payment.append(round(payment, 2))
        total_cost += payment

    total_interest = round(total_cost - credit_amount, 2)
    return {
        "monthly_payment": format_monthly_payment(monthly_payment),
        "total_cost": round(total_cost, 2),
        "total_interest": total_interest,
    }


def format_monthly_payment(monthly_payment):

    formatted_payment = {}
    current_year_list = []
    current_year = 1

    for count, value in enumerate(monthly_payment):
        current_year_list.append(value)
        if count % MONTHS_IN_YEAR == 11:
            formatted_payment[f"year_{current_year}"] = current_year_list
            current_year = current_year + 1
            current_year_list = []
    if len(monthly_payment) % MONTHS_IN_YEAR != 0:
         formatted_payment[f"year_{current_year}"] = current_year_list
    return formatted_payment
