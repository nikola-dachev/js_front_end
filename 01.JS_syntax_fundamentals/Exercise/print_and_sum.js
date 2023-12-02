function solve(num1, num2) {
  let final_total = 0;
  let my_list = [];
  while (num1 <= num2) {
    final_total += num1
    my_list.push(num1)
    num1 += 1

  }
  console.log(my_list.join(' '))
  console.log(`Sum: ${final_total}`)
}