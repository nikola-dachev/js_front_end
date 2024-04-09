function solve() {
    playerRef = document.getElementById('player')
	scoreRef = document.getElementById('score')
	roundRef = document.getElementById('round')
	
	addBtnRef = document.getElementById('add-btn')
	
	sureListRef = document.getElementById('sure-list')
	
	scoreBoardRef = document.getElementById('scoreboard-list')
	clearBtnRef = document.getElementsByClassName('btn clear')[0]
	
	addBtnRef.addEventListener('click', addBtnClicked)
	
	function addBtnClicked(e){
		if (playerRef.value === '' || scoreRef.value ==='' || roundRef.value ==='' ){
			return
		}
		
		let newName = document.createElement('p')
		let newScore = document.createElement('p')
		let newRound = document.createElement('p')
		
		let newArticle = document.createElement('article')
		let newLi = document.createElement('li')
		
		let editBtn = document.createElement('button')
		let okBtn = document.createElement('button')
		
		newLi.className = 'dart-item'
		
		let originalName = playerRef.value
		let originalScore = scoreRef.value
		let originalRound = roundRef.value
		
		newName.textContent = playerRef.value
		newScore.textContent = `Score: ${scoreRef.value}`
		newRound.textContent = `Round: ${roundRef.value}`
		
		editBtn.classList.add('btn')
		editBtn.classList.add('edit')
		editBtn.textContent = 'edit'
		
		okBtn.classList.add('btn')
		okBtn.classList.add('ok')
		okBtn.textContent = 'ok'
		
		newArticle.appendChild(newName)
		newArticle.appendChild(newScore)
		newArticle.appendChild(newRound)
		
		newLi.appendChild(newArticle)
		newLi.appendChild(editBtn)
		newLi.appendChild(okBtn)
		
		sureListRef.appendChild(newLi)
		
		playerRef.value = ''
		scoreRef.value =''
		roundRef.value =''
		
		addBtnRef.disabled = true
		
		editBtn.addEventListener('click', editBtnClicked)
		okBtn.addEventListener('click', okBtnClicked)
		
		function editBtnClicked(e){
			addBtnRef.disabled = false
			
			playerRef.value = originalName
			scoreRef.value = originalScore
			roundRef.value = originalRound
				
			newLi.remove()
		}
		
		function okBtnClicked(e){
			addBtnRef.disabled = false
			
			scoreBoardRef.appendChild(newLi)
			newLi.removeChild(okBtn)
			newLi.removeChild(editBtn)
			
			
			clearBtnRef.addEventListener('click', clearBtnClicked)
			
			function clearBtnClicked(e){
				newLi.remove()
			}
			
		}
	}
  }
  