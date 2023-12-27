function address_book(list){
    let address_dict = {}
    for (let item of list){
      [name, address] = item.split(":")
      address_dict[name] = address
    }
    let sorted_dict = Object.entries(address_dict)
    sorted_dict.sort((a,b) => a[0].localeCompare(b[0]))
    for ([key, value] of sorted_dict){
      console.log(`${key} -> ${value}`)
    }
  }
  
  address_book(['Tim:Doe Crossing',
   'Bill:Nelson Place',
   'Peter:Carlyle Ave',
   'Bill:Ornery Rd']
  )
  