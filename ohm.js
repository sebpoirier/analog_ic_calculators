function calculate() {
	// Get the values of the input fields
	var V = document.getElementById("V").value * document.getElementById("prefix_V").value;
	var R = document.getElementById("R").value * document.getElementById("prefix_R").value;
	var I = document.getElementById("I").value * document.getElementById("prefix_I").value;

	// Calculate
	var sel = document.getElementById("param").value;
	switch(sel) {
		case "V":
			var param = R * I;
			break;
		case "R":
			var param = V / I;
			break;
		case "I":
			var param = V / R;
			break;
	}
	document.getElementById(sel).value = param/document.getElementById("prefix_" + sel).value;
}
