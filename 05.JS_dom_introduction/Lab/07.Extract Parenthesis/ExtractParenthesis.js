function extract(content) {
    element_ref = document.getElementById('content')
    element_content = element_ref.textContent
    let pattern = /\([A-Za-z\s]+\)/g
    let result = element_content.match(pattern)
    console.log(result.join('; '))
}