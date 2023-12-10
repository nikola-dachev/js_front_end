function censored_word(text, word){
  let replacement = "*".repeat(word.length)
  while (text.includes(word)){
    text = text.replace(word, replacement)
  }
  console.log(text)
}

censored_word('A small sentence with some words small', 'small')