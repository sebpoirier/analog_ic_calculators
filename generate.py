import re
import json


def generate_html(name):
# header
    html_out = f'''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>{name}</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>

    <body>

    '''

# js extract
    with open(name + '.js', 'r') as js_in:
        data = js_in.read()

    in_regex = re.compile(r'function\s+(\w+)\((.+)\)')
    in_findall = in_regex.findall(data)

    out_regex = re.compile(r'return\s+\(\[(.+)\]\)')
    out_findall = out_regex.findall(data)

    info_regex = re.compile(r'var info = ({.*});')
    info_findall = info_regex.findall(data.replace('\n', ' '))[0]
    info_dict = json.loads(info_findall)

# form
    for form_i in range(len(in_findall)):
        fun_name = in_findall[form_i][0]
        in_names = [x.strip() for x in in_findall[form_i][1].split(',')]
        out_names = [x.strip() for x in out_findall[form_i].split(',')]

        parse_si_str = ''
        for item in in_names:
            parse_si_str += f'parse_si({item.strip()}.value),'

        html_out += '<form oninput="\n'
        for out_i in range(len(out_names)):
            html_out += f'{out_names[out_i]}.value = convert_si({fun_name}({parse_si_str[:-1]})[{out_i}]);\n'
        html_out +='''">
        <table>'''
        html_out += f'<caption>{fun_name}</caption>\n'

        for in_i in range(len(in_names)):
            html_out += '''
            <tr>
                <td>%s</td>
                <td class="input"><input name="%s" maxlength="20" size="20"/></td>
                <td>%s</td>
            </tr>''' % (in_names[in_i], in_names[in_i], info_dict['inout'][in_names[in_i]]['unit'])

        for out_i in range(len(out_names)):
            html_out += '''
            <tr>
                <td>%s</td>
                <td class="output"><output name="%s"></output></td>
                <td>%s</td>
            </tr>''' % (out_names[out_i], out_names[out_i], info_dict['inout'][out_names[out_i]]['unit'])

        html_out += '''
        </table>
    </form>\n\n'''

    html_out +=f'''
<script type="text/javascript" src="utils.js"></script>
<script type="text/javascript" src="{name}.js"></script>
    '''

# footer
    html_out += '''

    </body>
    </html>'''

# write to file
    with open(name + '.html', 'w') as f_out:
        f_out.write(html_out)

if __name__ == '__main__':
    names = ['ohm', 'cap_charge', 'cap_consumption', 'ind_charge']
    for name in names:
        generate_html(name)
