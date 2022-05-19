from bs4 import BeautifulSoup
import requests
import re


def scrapper_get_wibor_rates():
    url = "https://www.bankier.pl/mieszkaniowe/stopy-procentowe/wibor"

    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")

    text = doc.get_text()
    percentages = re.findall(".{4}[%]", text)
    for i, percentage in enumerate(percentages):
        percentages[i] = percentage.replace(",", ".").rstrip("%")

    return percentages
