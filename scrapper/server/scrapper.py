from bs4 import BeautifulSoup
import requests
import re


def scrapper_get_wibor_rates():
    url = "https://www.bankier.pl/mieszkaniowe/stopy-procentowe/wibor"

    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")

    text = doc.get_text()
    percentages = re.findall(".{4}[%]", text)
    date = (re.findall("[0-9]{4}[-][0-9]{2}[-][0-9]{2}", text)[0]).split("-")
    for i, percentage in enumerate(percentages):
        percentages[i] = percentage.replace(",", ".").rstrip("%")

    return {"date": [date[2], date[1], date[0]], "percentages": percentages}
