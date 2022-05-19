from server.db import Db
import schedule
import time
from flask import Flask
import schedule
from datetime import datetime
from server.scrapper import scrapper_get_wibor_rates


app = Flask(__name__)
db = Db(app)


def job_get_wibor_rates():
    date = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
    formatted_date = datetime.strptime(str(date), "%d-%m-%Y %H:%M:%S")

    is_wibor_in_db = is_todays_wibor_already_in_db(
        formatted_date.day, formatted_date.month, formatted_date.year
    )

    if not is_wibor_in_db:
        wibor_rates = scrapper_get_wibor_rates()
        kwargs = {
            "date": date,
            "wibor_on": wibor_rates[0],
            "wibor_tn": wibor_rates[1],
            "wibor_sw": wibor_rates[2],
            "wibor_1m": wibor_rates[3],
            "wibor_3m": wibor_rates[4],
            "wibor_6m": wibor_rates[5],
            "wibor_1r": wibor_rates[6],
        }
        db.insert_today_wibor_rates(kwargs)


def is_todays_wibor_already_in_db(day, month, year):
    wibor_today = db.get_todays_wibor()
    if wibor_today == "":
        return False

    date_today = datetime.strptime(wibor_today["date"], "%d-%m-%Y %H:%M:%S")

    if date_today.day == day and date_today.month == month and date_today.year == year:
        return True
    return False


schedule.every().day.at("12:00").do(job_get_wibor_rates)
job_get_wibor_rates()

while True:
    schedule.run_pending()
    time.sleep(10)
