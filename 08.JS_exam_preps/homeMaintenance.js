function solve(){
	placeRef = document.getElementById('place')
	actionRef = document.getElementById('action')
	personRef = document.getElementById('person')
	
	addBtn = document.getElementById('add-btn')
	
	taskListRef = document.getElementById('task-list')
	doneListRef = document.getElementById('done-list')
	
	addBtn.addEventListener('click', addBtnClicked)
	
	function addBtnClicked(e){
		
		if (placeRef.value ==='' || actionRef.value ==='' || personRef.value ===''){
			return
		}
		
		let newLi = document.createElement('li')
		newLi.className = 'clean-task'
		
		let newArticle= document.createElement('article')
		let newDiv = document.createElement('div')
		newDiv.className = 'buttons'
		
		let originalPlace = placeRef.value
		let originalAction = actionRef.value
		let originalPerson = personRef.value
		
		let newPlaceP = document.createElement('p')
		let newActionP = document.createElement('p')
		let newPersonP = document.createElement('p')
		
		newPlaceP.textContent = `Place:${placeRef.value}`
		newActionP.textContent = `Action:${actionRef.value}`
		newPersonP.textContent = `Person:${personRef.value}`
		
		let editBtn = document.createElement('button')
		let doneBtn = document.createElement('button')
		
		editBtn.className = 'edit'
		doneBtn.className = 'done'
		
		editBtn.textContent = 'Edit'
		doneBtn.textContent = 'Done'
		
		newArticle.appendChild(newPlaceP)
		newArticle.appendChild(newActionP)
		newArticle.appendChild(newPersonP)
		
		newDiv.appendChild(editBtn)
		newDiv.appendChild(doneBtn)
		
		newLi.appendChild(newArticle)
		newLi.appendChild(newDiv)
		
		taskListRef.appendChild(newLi)
		
		placeRef.value = ''
		actionRef.value = ''
		personRef.value = ''
		
		editBtn.addEventListener('click', editBtnClicked)
		doneBtn.addEventListener('click', doneBtnClicked)
		
		function editBtnClicked(e){
			placeRef.value = originalPlace
			actionRef.value = originalAction
			personRef.value = originalPerson
			
			newLi.remove()
		}
		
		function doneBtnClicked(e){
			newLi.classList.remove('clean-task')
			doneListRef.appendChild(newLi)
			newLi.removeChild(newDiv)
			
			let deleteBtn = document.createElement('button')
			deleteBtn.className = 'delete'
			deleteBtn.textContent = 'Delete'
			newLi.appendChild(deleteBtn)
			
			deleteBtn.addEventListener('click', deleteBtnClicked)
			
			function deleteBtnClicked(e){
				doneListRef.removeChild(newLi)
			}
		}
	}
}