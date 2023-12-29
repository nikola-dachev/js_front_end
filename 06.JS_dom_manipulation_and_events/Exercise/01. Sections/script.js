function create(words) {
   let content_ref = document.getElementById('content')
   for (i = 1; i<= words.length; i+= 1) {
      let new_div = document.createElement('div')
      let new_p = document.createElement('p')
      new_p.style.display = 'none'
      new_p.textContent = `Section ${i}`

      new_div.appendChild(new_p)
      content_ref.appendChild(new_div)

      new_div.addEventListener('click', onclick)

      function onclick(e){
         let target = e.currentTarget.children[0]
         target.style.display = 'block'
      }
   }

}