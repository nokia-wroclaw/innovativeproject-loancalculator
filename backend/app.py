from flask import Flask
app = Flask(__name__)

# import requests
# page = requests.get("http://www.example.com")
# from bs4 import BeautifulSoup
# soup = BeautifulSoup(page.content, 'html.parser')

@app.route('/')
def hello_world():
    return r'<!DOCTYPE html><html lang="en"><head><meta charset = "UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">  <title>Hello Front-End!</title></head><body><h4 style="color: #001135;position: fixed;top: 50%; left: 50%;transform: translate(-50%, -50%);">Hello front-end!</h4></body></html>'