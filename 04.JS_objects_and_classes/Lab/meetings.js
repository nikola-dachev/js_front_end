function meetings(list){
    my_dict = {}
    for (let item of list){
      let [day, name] = item.split(" ")
      if (day in my_dict){
        console.log(`Conflict on ${day}!`)
      }
      else{
        my_dict[day] = name
        console.log(`Scheduled for ${day}`)
      }
      
    }
    for ([day, name] of Object.entries(my_dict)){
      console.log(`${day} -> ${name}`)
    }
  }
  
  meetings(['Monday Peter',
   'Wednesday Bill',
   'Monday Tim',
   'Friday Tim']
  )
  