function factorial_divisors(factorial, divisor){
  let result_first_factorial = 1
  for (i=1; i<=factorial; i+=1){
    result_first_factorial *=i
  }
  let result_second_factorial = 1
  for(i=1; i<=divisor; i+=1){
    result_second_factorial *=i
  }
  console.log((result_first_factorial/result_second_factorial).toFixed(2))
}

factorial_divisors(6, 2)
