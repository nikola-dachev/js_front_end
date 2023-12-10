function even_odd_subtraction (list){
  let even_sum = 0
  let odd_sum =0
  while (list.length !=0){
    let current_num = list.pop()
    if (current_num % 2 == 0){
      even_sum += current_num
    }
    else{
      odd_sum += current_num
    }
  }
  console.log(even_sum -odd_sum)
}

even_odd_subtraction([1,2,3,4,5,6])