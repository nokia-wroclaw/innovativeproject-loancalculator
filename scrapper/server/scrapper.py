from bs4 import BeautifulSoup
import requests
import re
import locale
from datetime import datetime


def scrapper_get_wibor_rates(url):
    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")
    locale.setlocale(locale.LC_ALL, "pl_PL.UTF-8")

    text = doc.get_text()
    wibor_rates = {
        elem[0]: locale.atof(elem[1])
        for elem in re.findall("(WIBOR\s\w{2})\W*?(\d\,\d{2})%", text)
    }

    date = re.search("Data\n([0-9\-]{10})", text)
    if date.groups():
        date = date.group(1)
        datetime_obj = datetime.strptime(date, "%Y-%m-%d")
        date = datetime_obj.date()

    return {"date": date, **wibor_rates}
