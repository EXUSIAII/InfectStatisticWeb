import requests
import time
import random
import json

def get_country_data(date):
    json = requests.get('http://api.tianapi.com/txapi/ncov/index?key=d77a8a4d8661ecfbb26ce6ac02e6ceda&date={0}'.format(date)).json()


    return json['newslist'][0]['desc']


def get_map_data(date):
    r = open('./static/js/mapData.js', 'r', encoding='utf-8')
    timeline = r.readline().strip()
    update_time = '//update-time:{0}'.format(date)
    r.close()
    if True:
        json = requests.get('http://api.tianapi.com/txapi/ncovcity/index?key=d77a8a4d8661ecfbb26ce6ac02e6ceda&date={0}'.format(date)).json()
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
        w.writelines('let xA_data = [')
        for i in range(15):
            m = time.strftime('%m-%d', time.localtime(time.time()-(14-i)*3600*24))
            w.writelines("' {0}',".format(m))
        w.writelines('];\n')

        # w.writelines('let confirmedIncr = [')
        # for i in range(10):
        #     m = time.strftime('%Y-%m-%d', time.localtime(time.time() - (14 - i) * 3600 * 24))
        #     print(m)
        #     try:
        #         json = requests.get(
        #             'http://api.tianapi.com/txapi/ncov/index?key=d77a8a4d8661ecfbb26ce6ac02e6ceda&date={0}'.format(
        #                 m)).json()
        #         w.writelines("{0},".format(json['newslist'][0]['desc']['confirmedIncr']))
        #     except(KeyError):
        #         w.writelines("{0},".str(random.randint(0,30)))
        # w.writelines('];\n')
        w.close()


def get_province_data(date):
    j = requests.get(
        'http://api.tianapi.com/txapi/ncovcity/index?key=d77a8a4d8661ecfbb26ce6ac02e6ceda&date={0}'.format(date)).json()
    w = open('./static/json/provinceData.json', 'w', encoding='utf-8')
    # json_dict = {}
    # json_list = []
    # dict = {}
    # for i in range(len(j['newslist'])):
    #     dict.update({'currentConfirmedCount', j['newslist'][i]['currentConfirmedCount']})
    #     dict.update({'confirmedCount', j['newslist'][i]['confirmedCount']})
    #     dict.update({'curedCount', j['newslist'][i]['curedCount']})
    #     dict.update({'deadCount', j['newslist'][i]['deadCount']})
    #     dict.update({'provinceName', j['newslist'][i]['provinceName']})
    # json_list.append(dict)
    # json_dict.update({'data', json_list})
    json.dump(j,w)
    w.close()

