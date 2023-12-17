function simple_calculator(num_1, num_2, operator){
  let result;
  if (operator === "multiply"){
    result = (num_1, num_2) => num_1 * num_2
  }
  else if (operator === "divide"){
    result = (num_1,num_2) => num_1 / num_2
  }

  else if(operator === "add"){
    result = (num_1, num_2)=> num_1 +num_2
  }
  else if (operator ==="subtract"){
    result = (num_1 , num_2) => num_1- num_2
  }


  console.log(result(num_1, num_2))
}



simple_calculator(40,
8,
'divide'

)
