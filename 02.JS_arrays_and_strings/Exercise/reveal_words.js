function reveal_word(words, text){
  words_list = words.split(", ")
  text_list = text.split(" ")

  for (let i = 0; i < words_list.length; i+=1){
    for (let j = 0; j< text_list.length; j+=1 ){
      if( text_list[j].includes("*") && text_list[j].length === words_list[i].length) {
        text_list[j] = words_list[i]
      }
    }
  }
  console.log(text_list.join(" "))
}

reveal_word('great, learning',
'softuni is ***** place for ******** new programming languages'
)
