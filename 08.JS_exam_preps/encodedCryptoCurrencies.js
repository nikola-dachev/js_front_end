function solve(list){
    let text = list.shift()
    
    let currentCommand = list.shift()
    while (currentCommand !=='Buy'){
      let command = currentCommand.split('?')
      let action = command[0]
      if (action ==='TakeEven'){
        newText = ''
        for(i= 0; i<text.length; i+=1){
          if (i% 2 ===0){
            newText+=text[i]
          }
        }
        text = newText
        console.log(text)
        
      
      }
      else if (action ==='ChangeAll'){
        let substring = command[1]
        let replacement = command[2]
        
        text = text.split(substring).join(replacement)
        console.log(text)
        
        
      }
      else if (action ==='Reverse'){
        let substring = command[1]
        let reverseSubstring = substring.split('').reverse().join('')
        
        if (text.includes(substring)){
          text= text.replace(substring,'')
          text+=reverseSubstring
          console.log(text)
        }
        else {
          console.log('error')
        }
      }
      
      currentCommand = list.shift()
      
    }
    console.log(`The cryptocurrency is: ${text}`)
  }