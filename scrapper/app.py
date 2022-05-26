from server.db import Db
import schedule
import time
from flask import Flask
import schedule
from server.scrapper import scrapper_get_wibor_rates


app = Flask(__name__)
db = Db(app)


def job_get_wibor_rates():

    wibor_rates = scrapper_get_wibor_rates()
    print(wibor_rates)

    is_wibor_in_db = is_todays_wibor_already_in_db(
        wibor_rates["date"]
    )


    if not is_wibor_in_db:
        date_formatted = f"{wibor_rates['date'][0]}-{wibor_rates['date'][1]}-{wibor_rates['date'][2]}"
        kwargs = {
            "date": date_formatted,
            "wibor_on": wibor_rates['percentages'][0],
            "wibor_tn": wibor_rates['percentages'][1],
            "wibor_sw": wibor_rates['percentages'][2],
            "wibor_1m": wibor_rates['percentages'][3],
            "wibor_3m": wibor_rates['percentages'][4],
            "wibor_6m": wibor_rates['percentages'][5],
            "wibor_1r": wibor_rates['percentages'][6],
        }
        db.insert_today_wibor_rates(kwargs)


def is_todays_wibor_already_in_db(wibor_rates):
    wibor_today = db.get_todays_wibor()
    if wibor_today == "" or wibor_today == None:
        return False

    wibor_today_formatted = (wibor_today["date"]).split("-")

    if wibor_today_formatted[0] == wibor_rates[0] and wibor_today_formatted[1] == wibor_rates[1] and wibor_today_formatted[2] == wibor_rates[2]:
        return True
    return False


schedule.every().hour.do(job_get_wibor_rates)
job_get_wibor_rates()

while True:
    schedule.run_pending()
    time.sleep(10)
