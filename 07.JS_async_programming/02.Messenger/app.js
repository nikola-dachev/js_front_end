function attachEvents() {
    let [nameRef, contentRef, sendBtnRef, messageBtnRef] = document.getElementsByTagName('input')
	let textAreaRef = document.getElementById('messages')
	let baseURL = 'http://localhost:3030/jsonstore/messenger'
	
	sendBtnRef.addEventListener('click', async() => {
		let currentName = nameRef.value
		let currentMessage = contentRef.value
		let messageObj = {
			author: currentName,
			content: currentMessage
		}
		if (nameRef.value !== '' && contentRef.value !== ''){
			await fetch(baseURL, {
			method: 'POST',
			body: JSON.stringify(messageObj)
		});
		}
		
		nameRef.value = ''
		contentRef.value = ''
		
	});
	
	messageBtnRef.addEventListener('click', async() => {
		let allMessages = {}
		let my_list = []
		
		let response = await fetch(baseURL)
		allMessages = await response.json()
		for (let message of Object.values(allMessages)){
			my_list.push(`${message.author}: ${message.content}`)
		}
			
		
		textAreaRef.textContent = my_list.join('\n')
	})
}

attachEvents();