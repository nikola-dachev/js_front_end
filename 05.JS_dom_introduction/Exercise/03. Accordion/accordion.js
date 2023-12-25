function toggle() {
    let more = document.querySelector('.button')
    let extra = document.getElementById('extra')
    if (more.textContent === 'More'){
        more.textContent = 'Less'
        extra.style.display = 'block'
    }

    else{
        more.textContent = 'More'
        extra.style.display = 'none'
    }
    
    
}