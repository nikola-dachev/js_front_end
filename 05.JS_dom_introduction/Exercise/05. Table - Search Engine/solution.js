function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   

   function onClick() {
      let all_students = Array.from(document.querySelectorAll('tbody tr'))
      let search_bar = document.getElementById('searchField')
      
      for (const student of all_students) {
         student.classList.remove('select')
         if (search_bar.value !== '' && student.textContent.includes(search_bar.value)) {
            student.className = 'select'
         }
      }
      search_bar.value = ''

   }
}