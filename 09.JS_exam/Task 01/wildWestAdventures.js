function solve(list){

    heros = {}

    let n = list.shift()

    for (i=0; i<n; i+=1){
        let command = list.shift()
        let [name, hp, bullets] = command.split(" ")
        heros[name] = {
            'hp': Number(hp),
            'bullets': Number(bullets)
        }
    }

    currentCommand = list.shift()

    while (currentCommand !== 'Ride Off Into Sunset'){

        let actualCommand = currentCommand.split(' - ')
        let action = actualCommand[0]

        if (action === 'FireShot'){
            let charName = actualCommand[1]
            let target = actualCommand[2]

            if (heros[charName]['bullets']>0){
                heros[charName]['bullets'] -=1
                console.log(`${charName} has successfully hit ${target} and now has ${heros[charName]['bullets']} bullets!`)
            }
            else{
                console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`)
            }

        }

        else if (action === 'TakeHit'){
            let charName = actualCommand[1]
            let damage = Number(actualCommand[2])
            let attacker = actualCommand[3]

            heros[charName]['hp'] -= damage

            if (heros[charName]['hp'] >0){
                console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${heros[charName]['hp']} HP!`)
            }
            else {
                
                console.log(`${charName} was gunned down by ${attacker}!`)
                delete heros[charName]
            }
        }

        else if (action === 'Reload'){
            let charName = actualCommand[1]

            if (heros[charName]['bullets']< 6){
                let currentBullets = heros[charName]['bullets']
                heros[charName]['bullets'] = 6
                console.log(`${charName} reloaded ${heros[charName]['bullets'] - currentBullets} bullets!`)
            }
            else {
                console.log(`${charName}'s pistol is fully loaded!`)
            }
        }

        else if (action ==='PatchUp'){

            let charName = actualCommand[1]
            let amount = Number(actualCommand[2])

            let currentHp = heros[charName]['hp']

            heros[charName]['hp'] +=amount

            if (heros[charName]['hp']<100){
                console.log(`${charName} patched up and recovered ${heros[charName]['hp']-currentHp} HP!`)
            }
            
            else if (heros[charName]['hp'] > 100){
                heros[charName]['hp'] = 100
                console.log(`${charName} patched up and recovered ${heros[charName]['hp']-currentHp} HP!`)
            }
            else if (heros[charName]['hp'] === 100){
                console.log(`${charName} is in full health!`)

            }
        }

        currentCommand = list.shift()
    }

    for(hero in heros){
        console.log(`${hero}`)
        console.log(` HP: ${heros[hero]['hp']}`)
        console.log(` Bullets: ${heros[hero]['bullets']}`)
    }



}

solve(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])


