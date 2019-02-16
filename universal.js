function link_values(current_page) {
	var possible_values = ["Facials", "Advanced Treatments", "Target Treatments", "Specialty And High Tech Instruments"];
	var final_values = [];
	for(let v of possible_values) {
		if(v != current_page) {
			final_values.push(v);
		}
	}
	return v;
}
link_values("Facials");