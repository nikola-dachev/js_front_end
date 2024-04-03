function attachEvents() {
    let loadBtnRef = document.getElementById('btnLoad')
	let phoneBookListRef = document.getElementById('phonebook')
	let personInputRef = document.getElementById('person')
	let phoneInputRef = document.getElementById('phone')
	let createBtnRef = document.getElementById('btnCreate')
	
	let baseURL = 'http://localhost:3030/jsonstore/phonebook'
	
	let allEntries = {}
	
	loadBtnRef.addEventListener('click', getAllPhones)
	
	async function getAllPhones(){
		let response = await fetch(baseURL)
		allEntries = await response.json()
		for (let entry of Object.values(allEntries)){
			
			let newLi = document.createElement('li')
			newLi.textContent = `${entry.person}: ${entry.phone}`
			phoneBookListRef.appendChild(newLi)
			
			let deleteBtn = document.createElement('button')
			deleteBtn.textContent = 'Delete'
			newLi.appendChild(deleteBtn)
			
			deleteBtn.addEventListener('click', deleteInfo)
			
			function deleteInfo(){
				let id = entry._id
				fetch(`${baseURL}/${id}`,{
					method: 'DELETE'
				})
				newLi.remove()
			}
		}
		
	};
	
	createBtnRef.addEventListener('click', async() => {
		if (personInputRef.value !== '' && phoneInputRef !== ''){
			let currentName = personInputRef.value 
			let currentPhone = phoneInputRef.value
			let contactObject = {
				person: currentName,
				phone: currentPhone
			}
			
			let response = await fetch(baseURL, {
				method: 'POST',
				body: JSON.stringify(contactObject)
			})
			let result = await response.json()
			//getAllPhones()
			personInputRef.value = ''
			phoneInputRef.value = ''

			// .then((response) => response.json())
			// .then(()=> {
			// 	getAllPhones()
			// 	personInputRef.value = ''
			// 	phoneInputRef.value = ''
			// })
			
			
		}
	})
}

attachEvents();