function astro(list){
    astronauts = {}
    n = list.shift()
    
    for (i=0; i<n; i+=1){
      let [name, oxygenLevel,energyReserves] = list[i].split(' ')
      
      oxygenLevel = Number(oxygenLevel)
      energyReserves = Number(energyReserves)
      
      astronauts[name] = {
        'oxygenLevel': oxygenLevel,
        'energyReserves': energyReserves
      }
      
    }
    
    let currentCommand = list.shift()
    
    while (currentCommand !== 'End'){
      
      let [action, astronautName, amount] = currentCommand.split(' - ')
      amount = Number(amount)
      
      if (action === 'Explore'){
        if (astronauts[astronautName]['energyReserves'] >=amount) {
          astronauts[astronautName]['energyReserves'] -=amount
          console.log(`${astronautName} has successfully explored a new area and now has ${astronauts[astronautName]['energyReserves']} energy!`)
        }
        else {
          console.log(`${astronautName} does not have enough energy to explore!`)
        }
      }
      
      else if (action ==='Refuel'){
        let currentEnergyLevels = astronauts[astronautName]['energyReserves']
        astronauts[astronautName]['energyReserves'] += amount
        if (astronauts[astronautName]['energyReserves']> 200) {
          astronauts[astronautName]['energyReserves'] = 200
        }
        console.log(`${astronautName} refueled their energy by ${astronauts[astronautName]['energyReserves'] - currentEnergyLevels}!`)
      }
      else if (action == 'Breathe') {
        let currentOxygenLevel = astronauts[astronautName]['oxygenLevel']
        astronauts[astronautName]['oxygenLevel'] += amount
        if (astronauts[astronautName]['oxygenLevel'] >100) {
          astronauts[astronautName]['oxygenLevel'] = 100
        }
        console.log(`${astronautName} took a breath and recovered ${astronauts[astronautName]['oxygenLevel'] - currentOxygenLevel} oxygen!`)
      
      
    }
  
    currentCommand = list.shift()
    }
  
  for (let astronaut in astronauts){
    console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut]['oxygenLevel']}, Energy: ${astronauts[astronaut]['energyReserves']}`)
  }
  
  }