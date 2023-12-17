function string_substring(word, text){
  let text_list = text.toLowerCase().split(" ")
  let result = `${word} not found!`
  for (i=0; i< text_list.length; i+=1){
    if (text_list[i] === word){
      result = word
    }
  }
  console.log(result)
  }

string_substring('javascript',
'JavaScript is the best programming language'
)
string_substring('python',
'JavaScript is the best programming language'
