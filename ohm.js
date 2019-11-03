function calculate() {
	// Get the values of the input fields
	var V = document.getElementById("V").value * document.getElementById("prefix_V").value;
	var R = document.getElementById("R").value * document.getElementById("prefix_R").value;
	var I = document.getElementById("I").value * document.getElementById("prefix_I").value;

	// Calculate
	if (document.getElementById("V").disabled) {
		var sel = "V";
		var param = R * I;
	}
	else if (document.getElementById("R").disabled)  {
		var sel = "R";
		var param = V / I;
	}
	else if (document.getElementById("I").disabled) {
		var sel = "I";
		var param = V / R;
	}
	document.getElementById(sel).value = param/document.getElementById("prefix_" + sel).value;
}

function button_V() {
	document.getElementById("V").disabled = true;
	document.getElementById("R").disabled = false;
	document.getElementById("I").disabled = false;
}

function button_R() {
	document.getElementById("V").disabled = false;
	document.getElementById("R").disabled = true;
	document.getElementById("I").disabled = false;
}

function button_I() {
	document.getElementById("V").disabled = false;
	document.getElementById("R").disabled = false;
	document.getElementById("I").disabled = true;
}