function solve() {
  let  input_area = document.getElementById('input')
  let output = document.getElementById('output')

  let list_sentences = input_area.value.split('.')
  list_sentences = list_sentences.filter( s => s.length > 0)
  list_sentences = list_sentences.map(s => s += '.')

  while (list_sentences.length  > 0){
    let p = document.createElement('p')
    p.textContent = list_sentences.splice(0, 3).join('')
    output.appendChild(p)
  }
}