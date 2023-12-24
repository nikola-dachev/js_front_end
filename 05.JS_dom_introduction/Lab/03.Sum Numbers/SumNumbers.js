function calc() {
    let num1_ref = document.getElementById('num1')
    let num1_value = Number(num1_ref.value)
    let num2_ref = document.getElementById('num2')
    let num2_value = Number(num2_ref.value)
    let sum_ref = document.getElementById('sum')
    sum_ref.value = num1_value + num2_value
}
