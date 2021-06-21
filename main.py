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
            'inout': collections.OrderedDict(),
        }
        for item in in_findall[i][1].split(','):
            item_split = item.split('=')
            name = item_split[0].strip()
            if len(item_split) == 2:
                value = item_split[1].strip()
            else:
                value = ''
            js_di[fun_name]['inout'][name] = {
                'value': value,
                'type': 'input',
                'unit': js_di['info']['inout'][name]['unit'],
            }
        for item in out_findall[i].split(','):
            name = item.strip()
            js_di[fun_name]['inout'][name] = {
                'value': '',
                'type': 'output',
                'unit': js_di['info']['inout'][name]['unit'],
            }
        # Create display list
        js_di[fun_name]['display_list'] = list(js_di[fun_name]['inout'].keys())
        if fun_name in js_di['info']:
            if 'display_list' in js_di['info'][fun_name]:
                js_di[fun_name]['display_list'] = js_di['info'][fun_name]['display_list'].split()

    return js_di

# calculators
if __name__ == '__main__':
    env = Environment(loader=PackageLoader('main', 'templates'))
    calculator_template = env.get_template('calculator.html')

    js_fns = [f for f in os.listdir('.') if f[-3:] == '.js']
    js_fns = [js_fn for js_fn in js_fns if js_fn not in ['utils.js']]
    title_dict = {}
    for js_fn in js_fns:
        print(js_fn)
        js_di = js_to_dict(js_fn)

        calculator_html = calculator_template.render(js_di=js_di)
        html_fn = js_fn[:-3] + '.html'
        title_dict[html_fn] = js_di['info']['title']
        with open(html_fn, 'w') as f_out:
            f_out.write(calculator_html)

# index
    #index_template = env.get_template('index.html')
    #title_tuple = [(k, title_dict[k]) for k in sorted(title_dict, key=title_dict.get)]
    #index_html = index_template.render(title_tuple=title_tuple)
    #with open('index.html', 'w') as f_out:
        #f_out.write(index_html)
