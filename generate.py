import re
import json
import collections

def generate_html(fn_html, title, body):
# header
    html_out = f'''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Sebastien Poirier">
        <title>{title}</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>

    <body>

'''
    html_out += body

# footer
    html_out += '''

    </body>
    </html>'''

# write to file
    with open(fn_html, 'w') as f_out:
        f_out.write(html_out)

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

def generate_form(js_di):
# form
    html_out = ''
    for fun_name in list(js_di.keys())[1:]:
        in_names = js_di[fun_name]['fun_dict'].keys()
        out_names = js_di[fun_name]['ret_list']

        parse_si_str = ''
        for item in in_names:
            parse_si_str += f'parse_si({item.strip()}.value),'

        html_out += '<form oninput="\n'
        for out_i in range(len(out_names)):
            html_out += f'{out_names[out_i]}.value = convert_si({fun_name}({parse_si_str[:-1]})[{out_i}]);\n'
        html_out += '''">
        <table>'''
        html_out += f'''<caption><a href="{js_di['info']['js_fn']}">{fun_name}</a></caption>\n'''

        for in_name in in_names:
            html_out += f'''
            <tr>
                <td>{in_name}</td>
                <td class="input"><input name="{in_name}"
                    value="{js_di[fun_name]['fun_dict'][in_name]}"
                    maxlength="10" size="10"/></td>
                <td>{js_di['info']['inout'][in_name]['unit']}</td>
            </tr>'''

        for out_name in  out_names:
            html_out += f'''
            <tr>
                <td>{out_name}</td>
                <td class="output"><output name="{out_name}"></output></td>
                <td>{js_di['info']['inout'][out_name]['unit']}</td>
            </tr>'''

        html_out += '''
        </table>
    </form>\n\n'''

    html_out += f'''
<script type="text/javascript" src="utils.js"></script>
<script type="text/javascript" src="{js_di['info']['js_fn']}"></script>
    '''

    return html_out

if __name__ == '__main__':
    import os
    js_fns = [f for f in os.listdir('.') if f[-3:] == '.js']
    js_fns = [js_fn for js_fn in js_fns if js_fn not in ['utils.js']]
    title_dict = {}
    for js_fn in js_fns:
        js_di = js_to_dict(js_fn)
        js_di['info']['js_fn'] = js_fn

        body = generate_form(js_di)

        html_fn = js_fn[:-3] + '.html'
        html_title = js_di['info'].get('title', js_fn[:-3])
        generate_html(html_fn, html_title, body)
        title_dict [html_fn] = html_title

# Generate index file.
    s = [(k, title_dict[k]) for k in sorted(title_dict, key=title_dict.get)]
    html_index = ''
    for html_fn, html_title in s:
        html_index += f'    <a href="{html_fn}">{html_title}</a><br />\n'
    generate_html('index.html', 'index', html_index)
