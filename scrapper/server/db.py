from dis import dis
from email import message
from tkinter import E
import flask_pymongo
from flask_restful import Api
from flask_pymongo import PyMongo
import os
from pymongo import errors


class Db:
    def __init__(self, app):
        self.api = Api(app)
        #self.mongodb_client = PyMongo(app, uri=os.environ.get("DB_URI"))
        self.mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/calculator_data")
        self.db = self.mongodb_client.db

    def insert_today_wibor_rates(self, kwargs):
        try:
            self.db.wibor_rates.insert_one(kwargs)
        except errors.ConnectionFailure:
            print("Could not connect to database")

    def get_todays_wibor(self):
        try:
            cursor = self.db.wibor_rates.find().sort([("_id", -1)]).limit(1)
            result = list(cursor)
            if len(result) == 0:
                return
            wibor_rates = result[0]
            if wibor_rates == None:
                return
            return wibor_rates
        except errors.ConnectionFailure:
            print("Could not connect to database")
        except Exception as e:
            print(e)
