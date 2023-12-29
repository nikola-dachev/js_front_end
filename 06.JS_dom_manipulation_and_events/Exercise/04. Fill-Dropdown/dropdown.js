function addItem() {
    let text_ref = document.getElementById('newItemText')
	let value_ref = document.getElementById('newItemValue')
	let menu_ref = document.getElementById('menu')
	
	let new_option = document.createElement('option')
	new_option.textContent = text_ref.value
	new_option.value = value_ref.value
	
	if (text_ref.value !== '' && value_ref.value !== ''){
		menu_ref.appendChild(new_option)
	}
	
	text_ref.value = ''
	value_ref.value = ''
}