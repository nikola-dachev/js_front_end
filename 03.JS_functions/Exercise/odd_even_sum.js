
function odd_even_sum(num){
  let odd_list = []
  let even_list = []
  let odd_sum = 0
  let even_sum = 0
  let my_list = String(num).split("")
  even_list = my_list.filter(n =>Number(n) % 2=== 0)
  odd_list = my_list.filter(n=> Number(n) % 2 !== 0)
  even_list.forEach(num => even_sum+=Number(num))
  odd_list.forEach(num => odd_sum += Number(num))

 console.log(`Odd sum = ${odd_sum}, Even sum = ${even_sum}`)
}

odd_even_sum(3495892137259234)
