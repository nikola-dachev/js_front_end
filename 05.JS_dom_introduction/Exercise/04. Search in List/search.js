function search() {
   let list_items = Array.from(document.querySelectorAll('li'))
   let search_bar = document.getElementById('searchText')
   let result = document.getElementById('result')
   let matches = 0

   for (const li of list_items) {
      li.style.fontWeight =''
      li.style.textDecoration = ''
      
   }

   for (const li of list_items) {
      if (li.textContent.includes(search_bar.value)){
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline'
         matches += 1
      }
      result.textContent = `${matches} matches found`
   }
   
   search_bar.value = ''
}
