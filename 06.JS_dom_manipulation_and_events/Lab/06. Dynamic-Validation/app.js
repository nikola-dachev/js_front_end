function validate() {
    let input_ref = document.getElementById('email')

    input_ref.addEventListener('change', onchange)

    function onchange(e){
        let target = e.currentTarget
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/g
        let matches = target.value.match(pattern)

        if (matches){
            target.classList.remove('error')
        }
        else{
            target.classList.add('error')
        }
    }

}