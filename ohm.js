function calculate() {
	// Get the values of the input fields
	var V = document.getElementById("V").value * document.getElementById("V_prefix").value;
	var R = document.getElementById("R").value * document.getElementById("R_prefix").value;
	var I = document.getElementById("I").value * document.getElementById("I_prefix").value;

	// Calculate	
	assign_if_matches("V", R * I);
	assign_if_matches("R", V / I);
	assign_if_matches("I", V / R);
}
