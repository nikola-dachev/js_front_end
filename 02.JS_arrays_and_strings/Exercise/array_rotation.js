function array_rotation(list, rotation_num){
  for(i=0; i<rotation_num; i++){
    let current_num = list.shift()
    list.push(current_num)
  }
  console.log(list.join(" "))
}
