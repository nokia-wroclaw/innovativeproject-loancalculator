import requests

BASE = "http://127.0.0.1:5000/"

response = requests.put(
    url=BASE + "mortgageCalculator",
    json={
        "interest_type": "test",
        "installment_type": "fixed",
        "mortgage_value": 1,
        "down_payment": 1,
        "credit_amount": 100000,
        "loan_term": 10,
        "interest_rate": 3,
        "commission": 1,
    },
)
print(response.json())
