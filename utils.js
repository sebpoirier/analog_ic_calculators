function prefix_name(num) {
	if (num >= 1e3) return "k";
	else if (num >= 1) return "";
	else if (num >= 1e-3) return "m";
	else if (num >= 1e-6) return "u";
}

function assign_if_matches(name, value) {
	if (document.getElementById(name).disabled) {
		document.getElementById(name).value = value;
		document.getElementById(name).value /= document.getElementById(name + "_prefix").value;
	}
}

function button_disable(name) {
	var cusid_ele = document.getElementsByClassName("input_number");
	for (var i = 0; i < cusid_ele.length; i++) {
		cusid_ele[i].disabled=false;  
	}
	document.getElementById(name).disabled = true;
}

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
    var multiplier = Math.min(Math.max(3*Math.floor(Math.log10(val)/3), -24), 24);
    var prefix = si[multiplier];
    return (val/10**multiplier).toString() + prefix;
}
/*
function remember() {
	// Append to paragraph
	var string = "V = " + document.getElementById("V").value.toString(2) + prefix_name(document.getElementById("prefix_V").value) + "V, "
	string += "R = " + document.getElementById("R").value.toString(2) + prefix_name(document.getElementById("prefix_R").value) + "Ohm, "
	string += "I = " + document.getElementById("I").value.toString(2) + prefix_name(document.getElementById("prefix_I").value) + "A"
	
	var paragraph = document.getElementById("remember");	
	var text = document.createTextNode(string);
	paragraph.appendChild(text);
	linebreak = document.createElement("br");
	paragraph.appendChild(linebreak);
}
*/
