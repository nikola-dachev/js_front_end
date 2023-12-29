function attachEventsListeners() {
    let input_distance_ref = document.getElementById('inputDistance')
	let output_distance_ref = document.getElementById('outputDistance')
	
	let input_units_ref = document.getElementById('inputUnits')
	let output_units_ref = document.getElementById('outputUnits')
	
	let convert_btn = document.getElementById('convert')
	
	let converstionRatios = {
		'km': 1000,
		'm': 1,
		'cm': 0.01,
		'mm': 0.001,
		'mi': 1609.34,
		'yrd': 0.9144,
		'ft': 0.3048 ,
		'in': 0.0254 
	}
	
	convert_btn.addEventListener('click', convertButtonClick)
	
	function convertButtonClick(){
		let input_data = input_distance_ref.value
		let input_units = input_units_ref.value
		let output_units = output_units_ref.value
		
		let result = input_data * converstionRatios[input_units] / converstionRatios[output_units]
		
		output_distance_ref.disabled = false
		output_distance_ref.value = result
		
	}
}