function solve(){
	
	presentFieldRef = document.getElementById('gift')
	forFieldRef = document.getElementById('for')
	priceFieldRef = document.getElementById('price')
	
	addPresentBtn = document.getElementById('add-present')
	editPresentBtn = document.getElementById('edit-present')
	
	loadPresentsBtn = document.getElementById('load-presents')
	giftListRef = document.getElementById('gift-list')
	
	baseURL = 'http://localhost:3030/jsonstore/gifts'
	
	loadPresentsBtn.addEventListener('click',loadPresentsBtnClicked)
	
	async function loadPresentsBtnClicked(){
		editPresentBtn.disabled = true
		giftListRef.textContent = ''
		
		let response = await fetch(baseURL)
		let allPresents = await response.json()
		
		for (let present of Object.values(allPresents)){
			let newDiv = document.createElement('div')
			let newDivContent = document.createElement('div')
			let newGift = document.createElement('p')
			let newFor = document.createElement('p')
			let newPrice = document.createElement('p')
			let newDivBtns = document.createElement('div')
			let newChangeBtn = document.createElement('button')
			let newDeleteBtn = document.createElement('button')
			
			newDiv.className = 'gift-sock'
			newDivContent.className = 'content'
			
			newGift.textContent = present.gift
			newFor.textContent = present.for
			newPrice.textContent = present.price
			
			newDivBtns.className= 'buttons-container'
			newChangeBtn.className = 'change-btn'
			newChangeBtn.textContent = 'Change'
			newDeleteBtn.className = 'delete-btn'
			newDeleteBtn.textContent = 'Delete'
			
			newDivBtns.appendChild(newChangeBtn)
			newDivBtns.appendChild(newDeleteBtn)
			
			newDivContent.appendChild(newGift)
			newDivContent.appendChild(newFor)
			newDivContent.appendChild(newPrice)
			
			newDiv.appendChild(newDivContent)
			newDiv.appendChild(newDivBtns)
			
			giftListRef.appendChild(newDiv)
			
			newChangeBtn.addEventListener('click', newChangeBtnClicked)
			newDeleteBtn.addEventListener('click', newDeleteBtnClicked)
			
			async function newDeleteBtnClicked(){
				let id = present._id
				let response = await fetch(`${baseURL}/${id}`,{
				method:'DELETE'});
				
				newDiv.remove()
				loadPresentsBtnClicked()
			}
			
			function newChangeBtnClicked(){
				
				addPresentBtn.disabled = true
				editPresentBtn.disabled = false
				
				presentFieldRef.value = present.gift
				forFieldRef.value = present.for
				priceFieldRef.value = present.price
				
				newDiv.remove()
				
				editPresentBtn.addEventListener('click',editPresentBtnClicked)
				
				async function editPresentBtnClicked(){
					let id = present._id
					
					let newObj = {
						gift: presentFieldRef.value,
						for: forFieldRef.value,
						price: priceFieldRef.value
					}
					
					let response = await fetch(`${baseURL}/${id}`,{
						method:'PUT',
						body: JSON.stringify(newObj)
					});
					
					let result = await response.json()
					
					loadPresentsBtnClicked()
					addPresentBtn.disabled = false
					editPresentBtn.disabled = true
				}
			}
			
		}
	}
	
	addPresentBtn.addEventListener('click',addPresentBtnClicked)
	
	async function addPresentBtnClicked(){
		
		if (presentFieldRef.value !=='' && forFieldRef.value !=='' && priceFieldRef.value !== ''){
			
			let newObj = {
				gift:presentFieldRef.value,
				for: forFieldRef.value,
				price: priceFieldRef.value
			}
			
			presentFieldRef.value =''
			forFieldRef.value = ''
			priceFieldRef.value = ''
			
			let response = await fetch(baseURL, {
				method:'POST',
				body: JSON.stringify(newObj)
			});
			
			let result = await response.json()
			
			
			
			loadPresentsBtnClicked()
		}
	}
	
}

solve()