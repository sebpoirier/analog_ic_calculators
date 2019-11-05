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
