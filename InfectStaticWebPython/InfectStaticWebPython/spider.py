import requests


def get_country_data():
    r = requests.get('http://api.tianapi.com/txapi/ncov/index',params={'key': 'd77a8a4d8661ecfbb26ce6ac02e6ceda', 'date': '2020-03-15'}).json()
    return r['newslist'][0]['desc']


def get_map_data(time):
    r = open('./static/js/mapData.js', 'r', encoding='utf-8')
    timeline = r.readline().strip()
    update_time = '//update-time:{0}'.format(time)
    r.close()
    if not update_time == timeline:
        json = requests.get('http://api.tianapi.com/txapi/ncovcity/index?key=d77a8a4d8661ecfbb26ce6ac02e6ceda&date={0}'.format(time)).json()
        w = open('./static/js/mapData.js', 'w', encoding='utf-8')
        w.writelines(update_time)
        w.writelines('\nlet mydata = [\n')
        for i in range(len(json['newslist'])):
            w.writelines('{\n')
            w.writelines("'name': '{0}',\n".format(json['newslist'][i]['provinceShortName']))
            w.writelines("'value': '{0}',\n".format(json['newslist'][i]['currentConfirmedCount']))
            w.writelines('},\n')
        w.writelines('];\n')
        w.writelines('\nlet mydataSec = [\n')
        for i in range(len(json['newslist'])):
            w.writelines('{\n')
            w.writelines("'name': '{0}',\n".format(json['newslist'][i]['provinceShortName']))
            w.writelines("'value': '{0}',\n".format(json['newslist'][i]['confirmedCount']))
            w.writelines('},\n')
        w.writelines('];\n')


def get_map_data_by_date(time):

    w = open('./static/js/mapDataByDate.js', 'w', encoding='utf-8')


def test():
    print('test')

def get_province_data():
    pass