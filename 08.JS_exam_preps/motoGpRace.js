function motoGp(list){
    n = Number(list.shift())
    riders = {}
    
    
    for (i=0; i<n; i+=1){
      let current_participant = list[i].split('|')
      let [rider, fuelCapacity, position] = current_participant
      
      riders[rider]= {
        fuelCapacity: Number(fuelCapacity),
        position: Number(position)
      }
      
    }
    current_command = list.shift()
    while( current_command !== 'Finish'){
    
      let splitted = current_command.split(" - ")
      let action = splitted[0]
      
      if (action === 'StopForFuel'){
        let rider = splitted[1]
        let minFuel = Number(splitted[2])
        changedPosition = Number(splitted[3])
        
        if (riders[rider]['fuelCapacity'] <minFuel){
          riders[rider]['position'] = changedPosition
          console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
        }
        else {
          console.log(`${rider} does not need to stop for fuel!`)
        }
      }
      else if (action === 'Overtaking'){
        let rider1 = splitted[1]
        let rider2 = splitted[2]
        
        if (riders[rider1]['position']< riders[rider2]['position']){
          [riders[rider1]['position'],riders[rider2]['position']] = [riders[rider2]['position'],riders[rider1]['position']]
          console.log(`${rider1} overtook ${rider2}!`)
        }
      }
      
      if (action === 'EngineFail'){
        let rider = splitted[1]
        let lapsLeft = Number(splitted[2])
        
        delete riders[rider]
        console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
      }
      
      
      current_command= list.shift()
    }
    for (rider in riders){
      console.log(`${rider}`)
      console.log(`  Final position: ${riders[rider]['position']}`)
    } 
  
  }