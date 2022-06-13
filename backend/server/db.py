from bson.objectid import ObjectId
import flask_pymongo
from flask_restful import Api
from flask_cors import CORS
from flask_pymongo import PyMongo
import os
from pymongo import errors


class Db:
    def __init__(self, app):
        self.api = Api(app)
        self.cors = CORS(app, resources={r"/*": {"origins": "*"}})
        self.mongodb_client = PyMongo(app, uri=os.environ.get("DB_URI"))
        self.db = self.mongodb_client.db

    def insert_user_logs(self, kwargs):
        try:
            return str(self.db.calculator_logs.insert_one(kwargs).inserted_id)
        except errors.ConnectionFailure:
            print("Could not connect to database")

    def get_user_data_by_id(self, user_id):
        try:
            user_data = self.db.calculator_logs.find_one({"_id": ObjectId(user_id)})
            if user_data == None:
                return
            user_data["_id"] = str(user_data["_id"])
            return user_data
        except errors.ConnectionFailure:
            print("Could not connect to database")

    def get_most_recent_wibor(self):
        try:
            cursor = self.db.wibor_rates.find().sort([("_id", -1)]).limit(1)
            wibor_rates = cursor[0]
            return wibor_rates
        except errors.ConnectionFailure:
            print("Could not connect to database")

    def get_all_wibors(self):
        try:
            cursor = self.db.wibor_rates.find().sort([("_id", 1)])
            wibor_rates_list = []
            for wibor_rates in cursor:
                wibor_rates_list.append(wibor_rates)
            return wibor_rates_list
        except errors.ConnectionFailure:
            print("Could not connect to database")
