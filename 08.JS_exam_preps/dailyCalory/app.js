function solve(){
	
	baseURL = 'http://localhost:3030/jsonstore/tasks'
	
	foodFieldRef = document.getElementById('food')
	timeFieldRef = document.getElementById('time')
	caloriesFieldRef = document.getElementById('calories')
	
	addMealBtn = document.getElementById('add-meal')
	editMealBtn = document.getElementById('edit-meal')
	
	loadMealsBtn = document.getElementById('load-meals')
	
	listMealRef=  document.getElementById('list')
	
	
	loadMealsBtn.addEventListener('click', loadMealsBtnClicked)
	
	async function loadMealsBtnClicked(){
		
		editMealBtn.disabled = true
		listMealRef.textContent = ''
		
		let response = await fetch(baseURL)
		let allMeals = await response.json()
		
		for (let meal of Object.values(allMeals)){
            console.log(meal)
			
			let newDiv = document.createElement('div')
			newDiv.className = 'meal'
			
			let newMeal = document.createElement('h2')
			let newTime = document.createElement('h3')
			let newCalories = document.createElement('h3')
			
			newMeal.textContent = meal.food
			newTime.textContent = meal.time
			newCalories.textContent = meal.calories
			
			let newDivButtons = document.createElement('div')
			newDivButtons.className = 'meal-buttons'
			
			let changeBtn = document.createElement('button')
			let deleteBtn = document.createElement('button')
			
			changeBtn.className = 'change-meal'
			changeBtn.textContent = 'Change'
			
			deleteBtn.className = 'delete-meal'
			deleteBtn.textContent = 'Delete'
			
			newDivButtons.appendChild(changeBtn)
			newDivButtons.appendChild(deleteBtn)
			
			newDiv.appendChild(newMeal)
			newDiv.appendChild(newTime)
			newDiv.appendChild(newCalories)
			newDiv.appendChild(newDivButtons)
			
			listMealRef.appendChild(newDiv)
			
			changeBtn.addEventListener('click',changeBtnClicked)
			deleteBtn.addEventListener('click', deleteBtnClicked)
			
			async function deleteBtnClicked(){
				let id = meal._id
				let response = await fetch(`${baseURL}/${id}`,{
					method:'DELETE'
				});
				
				newDiv.remove()
				
				loadMealsBtnClicked()
			}
			
			function changeBtnClicked(){
				editMealBtn.disabled = false
				addMealBtn.disabled = true 
                
                newDiv.remove()
				
				foodFieldRef.value = meal.food
				timeFieldRef.value= meal.time
				caloriesFieldRef.value = meal.calories
				
				
				
				editMealBtn.addEventListener('click', editMealBtnClicked)
				
				async function editMealBtnClicked(){
					let id = meal._id
					
					let editedObj = {
					food:foodFieldRef.value,
					time: timeFieldRef.value,
					calories:caloriesFieldRef.value
					}
					
					let response = await fetch(`${baseURL}/${id}`,{
						method:'PUT',
						body: JSON.stringify(editedObj)
					});
					let result = await response.json()
					
					loadMealsBtnClicked()
					editMealBtn.disabled = true
					addMealBtn.disabled = false
					
				}
				
				
				
			}
			
		}
		
	}
	
	addMealBtn.addEventListener('click', addMealBtnClicked)
	
	async function addMealBtnClicked(){
		if (foodFieldRef.value !=='' && timeFieldRef.value !== '' && caloriesFieldRef.value !==''){
			
			let newObject = {
				food: foodFieldRef.value,
				time: timeFieldRef.value,
				calories:caloriesFieldRef.value
			}
			foodFieldRef.value = ''
			timeFieldRef.value= ''
			caloriesFieldRef.value = ''
			
			let response = await fetch(baseURL, {
				method: 'POST',
				body: JSON.stringify(newObject)
			});
			
			let result = await response.json()
            
			loadMealsBtnClicked()
		}
		
	}	
	
}

solve()