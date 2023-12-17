function palindrome_intiger(list){
  let current_num;

  while (list.length !=0){
    let is_palindrome = true
    current_num = list.shift()
    current_num = String(current_num).split("")
    while (current_num.length > 1){
      let first_num = current_num.shift()
      let last_num = current_num.pop()

      if (first_num !== last_num){
        is_palindrome = false
      }
    }
    if (is_palindrome){
      console.log('true')
    }
    else {
      console.log('false')
    }
  }

}

palindrome_intiger([123,323,421,121])
