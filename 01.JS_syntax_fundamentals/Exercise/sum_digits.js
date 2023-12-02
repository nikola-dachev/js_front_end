function solve(num){
  let num_as_string= num.toString();
  let sum = 0;
  for (let digit of num_as_string){
    sum += parseInt(digit)
  }
  console.log(sum)
}