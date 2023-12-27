function focused() {
    let all_inputs_ref = Array.from(document.getElementsByTagName('input'))

    for (const current_input of all_inputs_ref) {
        current_input.addEventListener('focus', onfocus)
        current_input.addEventListener('blur', onblur)
    }

    function onfocus(e){
        let parent_el = e.currentTarget.parentNode
        parent_el.classList.add('focused')
    }

    function onblur(e){
        let parent_el = e.currentTarget.parentNode
        parent_el.classList.remove('focused')
    }
}