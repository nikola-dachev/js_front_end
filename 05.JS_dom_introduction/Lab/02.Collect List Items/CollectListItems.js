function extractText() {
    let elements_ref = document.getElementsByTagName('li')
    let result = []
    for (let el of elements_ref){
        current_el_content = el.textContent
        result.push(current_el_content)
    }
    let text_area_ref = document.getElementById('result')
    text_area_ref.value = result.join('\n')
}