function parse_si(val) {
    var si = {
        'Y': 1e24,    
        'Z': 1e21,    
        'E': 1e18,    
        'P': 1e15,    
        'T': 1e12,    
        'G': 1e9,    
        'M': 1e6,    
        'k': 1e3,    
        'm': 1e-3,    
        'u': 1e-6,    
        'n': 1e-9,    
        'p': 1e-12,    
        'f': 1e-15,    
        'a': 1e-18,    
        'z': 1e-21,    
        'y': 1e-24,    
    };
    var prefix = si[val[val.length -1]] || 1;
    return parseFloat(val) * prefix;
}

function convert_si(val) {
    if (isNaN(val)) return "";
    var si = {
        '24': 'Y',    
        '21': 'Z',    
        '18': 'E',    
        '15': 'P',    
        '12': 'T',    
        '9': 'G',    
        '6': 'M',    
        '3': 'k',    
        '0': '',    
        '-3': 'm',    
        '-6': 'u',    
        '-9': 'n',    
        '-12': 'p',    
        '-15': 'f',    
        '-18': 'a',    
        '-21': 'z',    
        '-24': 'y',    
    };
    var multiplier = Math.min(Math.max(3*Math.floor(Math.log10(Math.abs(val))/3), -24), 24);
    var prefix = si[multiplier];
    return (Math.round(1e3*(val/10**multiplier))/1e3).toString() + prefix;
}

