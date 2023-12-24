function colorize() {
    let elements_ref = document.querySelectorAll('tr:nth-child(even)')
    for (let el of elements_ref){
        el.style.background = 'teal'
    }
}