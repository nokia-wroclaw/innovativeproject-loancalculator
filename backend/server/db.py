from flask_restful import Api
from flask_cors import CORS
from flask_pymongo import PyMongo
import os


class Db:
    def __init__(self, app):
        self.api = Api(app)
        self.cors = CORS(app, resources={r"/mortgageCalculator/*": {"origins": "*"}})
        self.mongodb_client = PyMongo(app, uri=os.environ.get("DB_URI"))
        self.db = self.mongodb_client.db

    def insert_user_logs(self, kwargs):
        try:
            self.db.calculator_logs.insert_one(kwargs)
        except:
            print("Could not connect to database")
