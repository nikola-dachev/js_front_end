function perfect_number(number){
  let divisors = 0
  for(let i=0; i<number; i+=1){
    if (number % i === 0){
      divisors += i
    }
  }
  if (divisors === number) {
    console.log("We have a perfect number!")
  }
  else{
    console.log("It's not so perfect.")
  }
}

perfect_number(1236498)
