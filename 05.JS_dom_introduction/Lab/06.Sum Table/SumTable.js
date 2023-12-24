function sumTable() {
    let elements_ref = document.querySelectorAll('td:nth-child(even)')
    let sum = 0
    for(let el of elements_ref){
        sum+= Number(el.textContent)
    }
    let sum_ref = document.getElementById('sum')
    sum_ref.textContent = sum
}