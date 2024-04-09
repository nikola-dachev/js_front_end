function solve(){
    loadVacationBtn = document.getElementById('load-vacations')
    loadListRef = document.getElementById('list')

    nameRef  = document.getElementById('name')
    numDaysRef = document.getElementById('num-days')
    fromDateRef = document.getElementById('from-date')

    addVacationBtn = document.getElementById('add-vacation')
    editVacationBtn = document.getElementById('edit-vacation')

    baseUrl = 'http://localhost:3030/jsonstore/tasks/'

    loadVacationBtn.addEventListener('click', loadBtnClicked)

    async function loadBtnClicked(){
        loadListRef.textContent= ''

        editVacationBtn.disabled = true

        let response = await fetch(baseUrl)
        let allVacations = await response.json()

        for (let vacation of Object.values(allVacations)){
            let newDiv = document.createElement('div')
            let newName = document.createElement('h2')
            let newDate = document.createElement('h3')
            let newDays = document.createElement('h3')
            let changeBtn = document.createElement('button')
            let doneBtn = document.createElement('button')

            newDiv.className = 'container'
            newName.textContent = vacation.name
            newDate.textContent = vacation.date 
            newDays.textContent = vacation.days 

            changeBtn.textContent = 'Change'
            changeBtn.className = 'change-btn'
            doneBtn.textContent = 'Done'
            doneBtn.className = 'done-btn'
            
            newDiv.appendChild(newName)
            newDiv.appendChild(newDate)
            newDiv.appendChild(newDays)
            newDiv.appendChild(changeBtn)
            newDiv.appendChild(doneBtn)

            loadListRef.appendChild(newDiv)

            
            doneBtn.addEventListener('click',doneBtnClicked)
            changeBtn.addEventListener('click', changeBtnClicked)


            async function doneBtnClicked(){
                let id = vacation._id
                fetch (`${baseUrl}${id}`,{
					method: 'DELETE'
				});
				newDiv.remove()

            }

            function changeBtnClicked(){
                nameRef.value = vacation.name
                numDaysRef.value = vacation.days
                fromDateRef.value = vacation.date

                addVacationBtn.disabled = true
                editVacationBtn.disabled = false

                newDiv.remove()

                editVacationBtn.addEventListener('click', editVacationBtnClicked)
                
                async function editVacationBtnClicked(){
					let id = vacation._id
                    let currentObj = {
                        name:nameRef.value,
                        days:numDaysRef.value,
                        date:fromDateRef.value
                    }
                    let response = await fetch (`${baseUrl}${id}`,{
                        method: 'PUT',
                        body: JSON.stringify(currentObj)
                    })
                    let result = await response.json()

                    loadBtnClicked()

                    addVacationBtn.disabled = false
                    editVacationBtn.disabled = true
                }
            }

        }

        
    }

    addVacationBtn.addEventListener('click',addVacationClicked)

    async function addVacationClicked(){

        if (nameRef.value !=='' && numDaysRef.value !=='' && fromDateRef.value !==''){

            let newObj= {
                name: nameRef.value,
                days: numDaysRef.value,
                date: fromDateRef.value
            }

            let response = await fetch(baseUrl,{
                method:'POST',
                body: JSON.stringify(newObj)
            });

            let result = await response.json()

            nameRef.value = ''
            numDaysRef.value=''
            fromDateRef.value = ''

            loadBtnClicked()


        }
        
    }
}

solve()