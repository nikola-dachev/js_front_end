function addItem() {
    let input_ref = document.getElementById('newItemText')
    let ul_ref = document.getElementById('items')

    let new_li = document.createElement('li')
    new_li.textContent = input_ref.value 
    ul_ref.appendChild(new_li)

    let deleted_link = document.createElement('a')
    deleted_link.textContent = '[Delete]'
    deleted_link.href = '#'
    new_li.appendChild(deleted_link)

    deleted_link.addEventListener('click', onclick)

    function onclick(e){
        let target = e.currentTarget.parentNode
        target.remove()
    }

    input_ref.value = ''
}