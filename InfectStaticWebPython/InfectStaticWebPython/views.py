import time
from . import spider
from django.shortcuts import render


def index(request):
    now_time = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    context = {}
    context.update(spider.get_country_data(now_time))
    context.update({'time': now_time})
    context_list = []
    for i in range(30):
        context_list.append(time.strftime('%Y-%m-%d', time.localtime(time.time()-i*3600*24)))
    context.update({'list': context_list})
    spider.get_map_data(now_time)
    return render(request, 'index.html', context)


def detail(request):
    return render(request, 'detail.html')


def loading(request):
    return render(request, 'loading.html')


def get_by_date(request):
    now_time = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    map_date = request.GET.get('getByDate')
    if map_date == '' or map_date == None:
        map_date = now_time
    context = {}
    context.update(spider.get_country_data(now_time))
    context.update({'time': now_time})
    context.update({'map_time': map_date})
    context_list = []
    for i in range(30):
        context_list.append(time.strftime('%Y-%m-%d', time.localtime(time.time() - i * 3600 * 24)))
    context.update({'list': context_list})
    spider.get_province_data(now_time)
    spider.get_map_data(map_date)
    return render(request, 'index.html', context)