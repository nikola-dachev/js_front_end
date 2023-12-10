function count_occurences(text, word){
  let counter = 0
  let new_list = text.split(" ")
  for (let w of new_list){
    if (w === word){
      counter +=1
    }
  }
  console.log(counter)
}