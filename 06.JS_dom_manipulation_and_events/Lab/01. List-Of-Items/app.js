function addItem() {
    let input_area = document.getElementById('newItemText')
    let new_li = document.createElement('li')
    new_li.textContent = input_area.value  

    let ul_reference = document.getElementById('items')
    ul_reference.appendChild(new_li)

    input_area.value = ''

}