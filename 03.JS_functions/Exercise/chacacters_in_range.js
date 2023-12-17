function char_in_range(char1, char2){
  let start_num = char1.charCodeAt()
  let end_num = char2.charCodeAt()
  let my_list = []
  if (start_num < end_num ){
    for(let i= start_num+1; i < end_num; i+=1){
      my_list.push(String.fromCharCode(i))
    }
  }
  else {
    for(let i= end_num+1; i < start_num; i+=1){
      my_list.push(String.fromCharCode(i))
    }
  }

  console.log(my_list.join(" "))
}

char_in_range('a','d')
