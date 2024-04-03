function attachEvents() {
    let loadPostBtn = document.getElementById('btnLoadPosts')
	let postsDropDown = document.getElementById('posts')
	let viewBtn = document.getElementById('btnViewPost')
	let postTitle = document.getElementById('post-title')
	let postBody = document.getElementById('post-body')
	let postComments = document.getElementById('post-comments')
	
	let baseUrl = ('http://localhost:3030/jsonstore/blog/')
	
	let allPosts = {}
	
	loadPostBtn.addEventListener('click', async() => {
		postsDropDown.textContent = ''
		let response = await fetch(baseUrl + 'posts')
		allPosts = await response.json()
		
		for (let [pId, postObj] of Object.entries(allPosts)){
			let newOption = document.createElement('option')
			newOption.value = pId
			newOption.textContent = postObj.title
			postsDropDown.appendChild(newOption)
		}
	});
	
	viewBtn.addEventListener('click', async() => {
		
		postComments.textContent = ''
		postBody.textContent = ''
		
		let postId = postsDropDown.value
		
		postTitle.textContent = allPosts[postId].title
		postBody.textContent = allPosts[postId].body
		
		let response = await fetch(baseUrl + 'comments')
		let allComments = await response.json()
		
		let filteredComments = Object.values(allComments).filter( c => c.postId = postId)
		for (comment of filteredComments){
			let newLi = document.createElement('li')
			newLi.id = comment.id
			newLi.textContent = comment.text
			postComments.appendChild(newLi)
		}
	});
}

attachEvents();