function solve() {
    studentFieldRef = document.getElementById('student')
	universityFieldRef = document.getElementById('university')
	scoreFieldRef = document.getElementById('score')
	nextBtnRef = document.getElementById('next-btn')
	
	previewListRef = document.getElementById('preview-list')
	candidatesListRef = document.getElementById('candidates-list')
	
	nextBtnRef.addEventListener('click',nextBtnClicked)
	
	function nextBtnClicked(e){
		if (studentFieldRef.value === '' || universityFieldRef.value === '' || scoreFieldRef.value === '' ){
			return
		}
		
			let newLi = document.createElement('li')
			let newArticle = document.createElement('article')
			let newName = document.createElement('h4')
			let newUniversity = document.createElement('p')
			let newScore = document.createElement('p')
			
			let studentName = studentFieldRef.value
			let universityName = universityFieldRef.value
			let scoreName = scoreFieldRef.value
			
			newLi.className = 'application'
			newName.textContent = studentFieldRef.value
			newUniversity.textContent = `University: ${universityFieldRef.value}`
			newScore.textContent = `Score: ${scoreFieldRef.value}`

			
			let editPreviwBtn = document.createElement('button')
			let applyPreviewBtn = document.createElement('button')
			
			editPreviwBtn.classList.add('action-btn')
			editPreviwBtn.classList.add('edit')
			editPreviwBtn.textContent = 'edit'
			
			applyPreviewBtn.classList.add('action-btn')
			applyPreviewBtn.classList.add('apply')
			applyPreviewBtn.textContent = 'apply'
			
			
			newArticle.appendChild(newName)
			newArticle.appendChild(newUniversity)
			newArticle.appendChild(newScore)
			
			newLi.appendChild(newArticle)
			newLi.appendChild(editPreviwBtn)
			newLi.appendChild(applyPreviewBtn)
			
			previewListRef.appendChild(newLi)
			
			studentFieldRef.value = ''
			universityFieldRef.value = ''
			scoreFieldRef.value =''
			
			nextBtnRef.disabled = true
			
			editPreviwBtn.addEventListener('click', editPreviwBtnClicked)
			applyPreviewBtn.addEventListener('click', applyPreviewBtnClicked)
			
			function editPreviwBtnClicked(e){
			
			nextBtnRef.disabled = false
			studentFieldRef.value = studentName
			universityFieldRef.value = universityName
			scoreFieldRef.value = scoreName
			
			newLi.remove()
			}
		
			function applyPreviewBtnClicked(e){
				nextBtnRef.disabled = false
				
				
				newLi.removeChild(editPreviwBtn)
				newLi.removeChild(applyPreviewBtn)
				candidatesListRef.appendChild(newLi)
				
				
			}
		
		
		
		
	}
  
  }
  