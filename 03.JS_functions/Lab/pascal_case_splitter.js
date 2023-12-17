function pascal_case_splitter(text){
  let regexp = /([A-Z][a-z]*)/g;
  let result = text.match(regexp)
  console.log(result.join(", "))
}
