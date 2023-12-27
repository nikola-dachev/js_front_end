function deleteByEmail() {
    let input_area_ref = document.getElementsByName('email')[0]
    let all_rows_ref = Array.from(document.getElementsByTagName('tbody')[0].children)
    
    let result_area = document.getElementById('result')
    let is_deleted = false

    for (let row of all_rows_ref){
        let current_mail = row.children[1]
        if (current_mail.textContent === input_area_ref.value){
            is_deleted = true
            row.remove()
        }

        if (is_deleted){
            result_area.textContent = 'Deleted'
        }
        else {
            result_area.textContent = 'Not found.'
        }
    }

    input_area_ref.value = ''

}