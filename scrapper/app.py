from server.db import Db
import schedule
import time
from flask import Flask
import schedule
from server.scrapper import scrapper_get_wibor_rates


app = Flask(__name__)
db = Db(app)


def job_get_wibor_rates():
    wibor_url = "https://www.bankier.pl/mieszkaniowe/stopy-procentowe/wibor"

    wibor_rates = scrapper_get_wibor_rates(wibor_url)

    is_wibor_in_db = is_todays_wibor_already_in_db(wibor_rates["date"])

    if not is_wibor_in_db:
        db.insert_today_wibor_rates(wibor_rates)


def is_todays_wibor_already_in_db(date: str) -> bool:
    wibor_today = db.get_todays_wibor(date)
    if wibor_today == "" or wibor_today == None:
        return False

    date = date.split("-")
    wibor_today_formatted = (wibor_today["date"]).split("-")

    if (
        wibor_today_formatted[0] == date[0]
        and wibor_today_formatted[1] == date[1]
        and wibor_today_formatted[2] == date[2]
    ):
        return True
    return False


schedule.every().day.at("12:30").do(job_get_wibor_rates)
schedule.every().day.at("17:30").do(job_get_wibor_rates)
job_get_wibor_rates()

while True:
    schedule.run_pending()
    time.sleep(10)
