function every_nth_element(list, number){
  let new_list = []
  for (i=0; i< list.length; i +=number){
    new_list.push(list[i])
  }
  return new_list
}
