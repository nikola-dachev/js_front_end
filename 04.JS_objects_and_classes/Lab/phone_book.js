function phone_book(list){
    let my_dict = {}
    for (let item of list){
      [name, phone] = item.split(" ")
      
      my_dict[name] = phone
      
      }
    for ([name, phone] of Object.entries(my_dict)){
      console.log(`${name} -> ${phone}`)
    }
  }
  
  phone_book(['Tim 0834212554',
   'Peter 0877547887',
   'Bill 0896543112',
   'Tim 0876566344']
  )
  