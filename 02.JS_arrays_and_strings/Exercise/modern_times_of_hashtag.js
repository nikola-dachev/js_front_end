function modern_times(text) {
  let regexp = /#[A-Za-z]+/g;
  let matches = text.match(regexp)
  for (let word of matches){
    console.log(word.substring(1))
  }
}
