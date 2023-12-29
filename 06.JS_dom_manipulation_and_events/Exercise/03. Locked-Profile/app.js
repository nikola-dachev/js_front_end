function lockedProfile() {
    let all_btn_ref = Array.from(document.getElementsByTagName('button'))
	
	for (const btn of all_btn_ref){
		btn.addEventListener('click', show_more)
	}
	
	function show_more(e){
		let btn_target = e.currentTarget
		let profile_target = e.currentTarget.parentNode
		let unlocked_btn = profile_target.children[4]
		let hidden_info = profile_target.children[9]
		
		if (!unlocked_btn.checked){
			return;
		}
		if (unlocked_btn.checked && btn_target.textContent === 'Show more'){
			hidden_info.style.display = 'block'
			btn_target.textContent = 'Hide it'
		}
		
		else if (unlocked_btn.checked && btn_target.textContent === 'Hide it'){
			hidden_info.style.display = 'none'
			btn_target.textContent = 'Show more'
		}
	
	}
}
