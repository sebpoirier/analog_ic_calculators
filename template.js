function calculate() {
	// Get the values of the input fields
	var {p1} = document.getElementById("{p1}").value * document.getElementById("{p1}_prefix").value;
	var {p2} = document.getElementById("{p2}").value * document.getElementById("{p2}_prefix").value;
	var {p3} = document.getElementById("{p3}").value * document.getElementById("{p3}_prefix").value;

	// Calculate	
	assign_if_matches("{p1}", {e1});
	assign_if_matches("{p2}", {e2});
	assign_if_matches("{p3}", {e3});
}
