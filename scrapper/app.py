from server.db import Db
import schedule
import time
from flask import Flask
import schedule
from server.scrapper import scrapper_get_wibor_rates
from datetime import datetime


app = Flask(__name__)
db = Db(app)


def job_get_wibor_rates():
    wibor_url = "https://www.bankier.pl/mieszkaniowe/stopy-procentowe/wibor"

    wibor_rates = scrapper_get_wibor_rates(wibor_url)

    is_wibor_in_db = is_todays_wibor_already_in_db(wibor_rates["date"])

    if not is_wibor_in_db:
        wibor_rates["date"] = wibor_rates["date"].strftime("%Y-%m-%d")
        db.insert_today_wibor_rates(wibor_rates)


def is_todays_wibor_already_in_db(date: datetime.date) -> bool:
    wibor_today = db.get_todays_wibor(date)

    if wibor_today == "" or wibor_today == None:
        return False

    if str(date) == wibor_today["date"]:
        return True
    return False


schedule.every().day.at("12:30").do(job_get_wibor_rates)
schedule.every().day.at("17:30").do(job_get_wibor_rates)
job_get_wibor_rates()

while True:
    schedule.run_pending()
    time.sleep(10)
