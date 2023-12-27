function attachGradientEvents() {
    let gradient_ref = document.getElementById('gradient-box')
    let result_ref = document.getElementById('result')

    gradient_ref.addEventListener('mousemove', mousemove)
    gradient_ref.addEventListener('mouseout', mouseout)

    function mousemove(e){
        let power = e.offsetX / (e.target.clientWidth - 1) 
        power = Math.trunc(power * 100) 
        result_ref.textContent = power + "%"
    }

    function mouseout(e){
        result_ref.textContent = ''
    }
}