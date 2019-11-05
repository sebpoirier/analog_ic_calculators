function calculate() {
	// Get the values of the input fields
	var C = document.getElementById("C").value * document.getElementById("C_prefix").value;
	var V = document.getElementById("V").value * document.getElementById("V_prefix").value;
	var I = document.getElementById("I").value * document.getElementById("I_prefix").value;
	var t = document.getElementById("t").value * document.getElementById("t_prefix").value;

	// Calculate
	assign_if_matches("C", I * t / V);
	assign_if_matches("V", I * t / C);
	assign_if_matches("I", C * V / t);
	assign_if_matches("t", C * V / I);
}
