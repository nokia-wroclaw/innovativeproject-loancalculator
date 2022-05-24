from dis import dis
import flask_pymongo
from flask_restful import Api
from flask_pymongo import PyMongo
import os
from pymongo import errors


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

    def get_todays_wibor(self):
        try:
            cursor = self.db.wibor_rates.find().sort([("_id", -1)]).limit(1)
            wibor_rates = cursor[0]
            if wibor_rates == None:
                return
            return wibor_rates
        except errors.ConnectionFailure:
            print("Could not connect to database")
