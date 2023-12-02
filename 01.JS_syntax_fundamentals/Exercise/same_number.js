function same_numbers(num){
  let sum = 0;
  let num_to_string = String(num);
  let same_digit = true;
  for(i=0 ; i< num_to_string.length ; i++) {
    sum += Number(num_to_string[i])
    if (i< num_to_string.length -1){
      if (num_to_string[i] !== num_to_string[i+1]){
        same_digit = false
      }
    }
  }

  console.log(`${same_digit}`)
  console.log(`${sum}`)
}
