function sorting_numbers(list){
  let new_list = []

  while (list.length !=0){

    min_num = (Math.min(...list))
    let min_num_index = list.indexOf(min_num)
    list.splice(min_num_index, 1)
    new_list.push(min_num)

    if (list.length !=0){
      max_num = (Math.max(...list))
      new_list.push(max_num)
      let max_num_index = list.indexOf(max_num)
      list.splice(max_num_index, 1)
    }
  }
 return new_list

}

console.log(sorting_numbers([1, 65, 3, 52, 48, 63, 31, -3, 18]))
