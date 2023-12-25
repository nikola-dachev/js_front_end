function subtract() {
    let first_number = Number(document.getElementById('firstNumber').value)
    let second_number = Number(document.getElementById('secondNumber').value)
    let result_ref = document.getElementById('result')
    result_ref.textContent = first_number - second_number

}