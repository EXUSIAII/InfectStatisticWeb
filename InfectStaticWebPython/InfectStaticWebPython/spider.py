import requests

def get_country_data():
    r = requests.get('http://api.tianapi.com/txapi/ncov/index',params={'key': 'd77a8a4d8661ecfbb26ce6ac02e6ceda', 'date': '2020-03-15'}).json()
