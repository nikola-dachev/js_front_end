function solve() {
  let text = document.getElementById('text').value.toLowerCase()
  let naming_convention = document.getElementById('naming-convention').value
  let final_result = document.getElementById('result')
  text = text.split(" ")
  let result = []

  if (naming_convention === 'Camel Case') {
    
    result.push(text[0])

    for (let i = 1; i < text.length; i += 1) {
      let current_el = text[i].charAt(0).toUpperCase() + text[i].substring(1)
        result.push(current_el)
        final_result.textContent = result.join('')
    }
  }

  else if (naming_convention === "Pascal Case"){
    for( let i= 0; i< text.length; i+=1){
      let current_el = text[i].charAt(0).toUpperCase() + text[i].substring(1)
      result.push(current_el)
      final_result.textContent = result.join('')
    }
  }

  else{
    final_result.textContent = 'Error!'
  }
}