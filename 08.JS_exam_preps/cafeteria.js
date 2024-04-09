function cafeteria(list){
    n = list.shift()
    baristas = {}
    
    
    for (i=0; i<n; i+=1){
      let [name, shift, coffeeTypes] = list[i].split(' ')
      baristas[name] = {
        'shift': shift,
        'coffeeTypes': coffeeTypes
      }
      
      
    }
    
    
    let currentCommand = list.shift()
    
    while (currentCommand !== 'Closed'){
      
      let splittedCommand = currentCommand.split(' / ')
      
      let action = splittedCommand[0]
      
      if (action === 'Prepare'){
        let name = splittedCommand[1]
        let shift = splittedCommand[2]
        let coffeeType= splittedCommand[3]
        
        
        if (baristas[name]['shift'] === shift
   && baristas[name]['coffeeTypes'].includes(coffeeType) ){
          console.log(`${name} has prepared a ${coffeeType} for you!`)
        }
        else {
          console.log(`${name} is not available to prepare a ${coffeeType}.`)
        }
      }
      
      else if (action ==='Change Shift'){
        let name = splittedCommand[1]
        let newShift = splittedCommand[2]
        
        baristas[name]['shift'] = newShift
        console.log(`${name} has updated his shift to: ${newShift}`)
      }
      
      else if (action === 'Learn'){
        let name = splittedCommand[1]
        let newCoffeType = splittedCommand[2]
        
        if (baristas[name]['coffeeTypes'].includes(newCoffeType)){
          console.log(`${name} knows how to make ${newCoffeType}.`)
        }
        
        else {
          baristas[name]['coffeeTypes']+=','
          baristas[name]['coffeeTypes']+=newCoffeType
          console.log(`${name} has learned a new coffee type: ${newCoffeType}.`)
        }
      }
      
      currentCommand = list.shift()
    }
    
    for (barista in baristas){
      let a = baristas[barista]['coffeeTypes'].split(',')
      console.log(`Barista: ${barista}, Shift: ${baristas[barista]['shift']}, Drinks: ${a.join(', ')}`)
    }
    
  }