function encodeAndDecodeMessages() {
    let all_text_areas_ref = Array.from(document.getElementsByTagName('textarea'))
	let all_btn_ref = Array.from(document.getElementsByTagName('button'))
	
	let encode_text_area = all_text_areas_ref[0]
	let decode_text_area = all_text_areas_ref[1]
	
	let encode_btn = all_btn_ref[0]
	let decode_btn = all_btn_ref[1]
	
	encode_btn.addEventListener('click', textEncoding)
	decode_btn.addEventListener('click', textDecoding)
	
	function textEncoding(e){
		let current_text = encode_text_area.value
		let new_text = ''
		for (i =0; i<current_text.length; i+= 1){
			let new_ascii_number = (current_text[i].charCodeAt(0) + 1)
			let new_symbol = String.fromCharCode(new_ascii_number)
			new_text += new_symbol
		}
		decode_text_area.value = new_text
		encode_text_area.value = ''
		
		decode_btn.disabled = false
	}
	
	function textDecoding(e){
		let current_text = decode_text_area.value
		let new_text  = ''
		for (i =0; i<current_text.length; i+= 1){
			let new_asci = (current_text[i].charCodeAt(0) - 1)
			let new_symbol = String.fromCharCode(new_asci)
			new_text += new_symbol
		}
		
		decode_text_area.value = new_text
		
		decode_btn.disabled = true
	}
}