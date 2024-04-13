function solve(){

    baseUrl = 'http://localhost:3030/jsonstore/games'

    let gameNameRef = document.getElementById('g-name')
    let typeRef = document.getElementById('type')
    let maxPlayersRef = document.getElementById('players')

    let addGameBtn = document.getElementById('add-game')
    let editGameBtn = document.getElementById('edit-game')

    let loadGamesBtn = document.getElementById('load-games')

    let gameListRef = document.getElementById('games-list')

    loadGamesBtn.addEventListener('click', loadGamesBtnClicked)

    async function loadGamesBtnClicked(){
        
        gameListRef.textContent = ''
        editGameBtn.disabled = true
        let result = await fetch(baseUrl)
        let allGames = await result.json()
        console.log(allGames)

        for (let game of Object.values(allGames)){
            let newDivBoardGame = document.createElement('div')
            newDivBoardGame.className = 'board-game'

            let newDivContent = document.createElement('div')
            newDivContent.className = 'content'

            let newName = document.createElement('p')
            newName.textContent = game.name 

            let newType = document.createElement('p')
            newType.textContent = game.type 

            let newPlayers = document.createElement('p')
            newPlayers.textContent = game.players 

            let newDivBtnContainers = document.createElement('div')
            newDivBtnContainers.className = 'buttons-container'

            let changeBtn = document.createElement('button')
            changeBtn.className = 'change-btn'
            changeBtn.textContent = 'Change'

            let deleteBtn = document.createElement('button')
            deleteBtn.className = 'delete-btn'
            deleteBtn.textContent = 'Delete'

            newDivContent.appendChild(newName)
            newDivContent.appendChild(newType)
            newDivContent.appendChild(newPlayers)

            newDivBtnContainers.appendChild(changeBtn)
            newDivBtnContainers.appendChild(deleteBtn)

            newDivBoardGame.appendChild(newDivContent)
            newDivBoardGame.appendChild(newDivBtnContainers)

            gameListRef.appendChild(newDivBoardGame)

            changeBtn.addEventListener('click', changeBtnClicked)
            deleteBtn.addEventListener('click', deleteBtnClicked)

            function changeBtnClicked(){
                addGameBtn.disabled = true
                editGameBtn.disabled = false
                newDivBoardGame.remove()

                gameNameRef.value = game.name 
                typeRef.value = game.type
                maxPlayersRef.value =game.players 

                editGameBtn.addEventListener('click', editGameBtnClicked)

                async function editGameBtnClicked(){
                    let id = game._id

                    let editedObj = {
                        name:gameNameRef.value,
                        type: typeRef.value,
                        players: maxPlayersRef.value
                    }

                    gameNameRef.value = ''
                    typeRef.value = ''
                    maxPlayersRef.value = ''

                    let response = await fetch(`${baseUrl}/${id}`,{
                        method:'PUT',
                        body:JSON.stringify(editedObj)
                    })
                    let result = await response.json()
                    loadGamesBtnClicked()

                    addGameBtn.disabled = false
                    editGameBtn.disabled = true

                }


            }

            async function deleteBtnClicked(){
                
                let id = game._id
                let response = await fetch(`${baseUrl}/${id}`,{
                    method:'DELETE'
                });
                newDivBoardGame.remove()

                loadGamesBtnClicked()

            }

        }
    }

    addGameBtn.addEventListener('click', addGameBtnClicked)

    async function addGameBtnClicked(){
        if (gameNameRef.value !=='' && typeRef.value !=='' && maxPlayersRef.value !==''){
            let newObj = {
                name: gameNameRef.value,
                type: typeRef.value,
                players: maxPlayersRef.value
            }
            gameNameRef.value =''
            typeRef.value =''
            maxPlayersRef.value =''

            let response = await fetch (baseUrl,{
                method:'POST',
                body: JSON.stringify(newObj)
            })
            let result = await response.json()

            loadGamesBtnClicked()
        }
        
    }





}



solve()