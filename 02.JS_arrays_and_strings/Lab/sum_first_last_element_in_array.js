function sum_first_last_number(list){
  let sum_numbers = 0
  sum_numbers+= list[0]
  sum_numbers+=list[list.length -1]
  console.log(sum_numbers)
}

sum_first_last_number([1,2,3])