function inventory(input){
    let heroes_object = []
    for (let command of input){
      let [name, level, items] = command.split(' / ')
      
      let hero = {
        name: name, 
        level: Number(level), 
        items: items
        
      }
      heroes_object.push(hero)
    }
    let sorted_heroes = heroes_object.sort( (a,b ) => a.level - b.level)
    
    for (let hero of sorted_heroes){
      console.log(`Hero: ${hero.name}`)
      console.log(`level => ${hero.level}`)
      console.log(`items => ${hero.items}`)
    }
  }
  
  inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
  ]
  )
  