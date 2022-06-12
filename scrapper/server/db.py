from flask_restful import Api
from flask_pymongo import PyMongo
import os
from pymongo import errors
from datetime import datetime


class Db:
    def __init__(self, app):
        self.api = Api(app)
        self.mongodb_client = PyMongo(app, uri=os.environ.get("DB_URI"))
        self.db = self.mongodb_client.db

    def insert_today_wibor_rates(self, kwargs):
        try:
            self.db.wibor_rates.insert_one(kwargs)
        except errors.ConnectionFailure:
            print("Could not connect to database")

    def get_todays_wibor(self, date: datetime.date):
        try:
            for result in self.db.wibor_rates.find({"date": date.strftime("%Y-%m-%d")}):
                return result
        except errors.ConnectionFailure:
            print("Could not connect to database")
