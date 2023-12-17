
function add_and_subtract(num1, num2, num3){
  let sum = (num1, num2) => num1 +num2
  let subtract = (sum, num3) => sum(num1, num2) - num3
  console.log(subtract(sum, num3))
}

add_and_subtract(23,
6,
10
)
