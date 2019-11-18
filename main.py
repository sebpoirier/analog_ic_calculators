from jinja2 import Environment, PackageLoader
import collections
import json
import os
import re

def js_to_dict(fn_js):
# js extract
    with open(fn_js, 'r') as js_in:
        data = js_in.read()

    info_regex = re.compile(r'var info = ({.*});')
    info_findall = info_regex.findall(data.replace('\n', ' '))[0]

    in_regex = re.compile(r'function\s+(\w+)\((.+)\)')
    in_findall = in_regex.findall(data)

    out_regex = re.compile(r'return\s+\(\[(.+)\]\)')
    out_findall = out_regex.findall(data)

# dict generation
    js_di = collections.OrderedDict()
    js_di['info'] = json.loads(info_findall)
    js_di['info']['js_fn'] = fn_js
    if 'title' not in js_di['info'].keys():
        js_di['info']['title'] = fn_js[:-3]

    for i in range(len(in_findall)):
        fun_name = in_findall[i][0]
        js_di[fun_name] = {
            'ret_list': [x.strip() for x in out_findall[i].split(',')],
            'fun_dict': collections.OrderedDict(),
        }
        for item in in_findall[i][1].split(','):
            item_split = item.split('=')
            if len(item_split) == 2:
                js_di[fun_name]['fun_dict'][item_split[0].strip()] = item_split[1].strip()
            else:
                js_di[fun_name]['fun_dict'][item_split[0].strip()] = ''

    return js_di

# jinja
env = Environment(loader=PackageLoader('main', 'templates'))
test_template = env.get_template('test.html')

js_fns = [f for f in os.listdir('.') if f[-3:] == '.js']
js_fns = [js_fn for js_fn in js_fns if js_fn not in ['utils.js']]
title_dict = {}
for js_fn in js_fns:
    js_di = js_to_dict(js_fn)

    test_html = test_template.render(js_di=js_di)
    html_fn = js_fn[:-3] + '.html'
    with open(html_fn, 'w') as f_out:
        f_out.write(test_html)

