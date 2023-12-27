function employees(list){
    employees_dict = {}
    for (let item of list){
      employees_dict[item] = item.length
    }
    
    for ([key, value] of Object.entries(employees_dict)){
      console.log(`Name: ${key} -- Personal Number: ${value}`)
    }
  }
  
  employees([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal'
  ]
  )
  