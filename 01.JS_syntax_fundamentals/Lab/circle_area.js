function solve(input) {
  let input_type = typeof(input);
  let result;
  if (input_type === 'number') {
    result = (Math.PI * (input ** 2)).toFixed(2)
  }
  else {
    result = `We can not calculate the circle area, because we receive a ${input_type}.`
  }

  console.log(result)
}
