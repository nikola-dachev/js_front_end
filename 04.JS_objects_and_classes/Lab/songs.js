function songs(list) {
    class Songs{
      constructor(type_list, name, time){
        this.type_list = type_list
        this.name = name
        this.time = time
      }
    }
    let number_of_songs = list.shift()
    let type_of_list = list.pop()
    let list_with_songs = []
    
    for (i=0; i<list.length; i+=1){
      [type_list, name, time] = list[i].split("_")
      list_with_songs.push(new Songs(type_list, name , time))
    }
    
    if (type_of_list == "all"){
      list_with_songs.forEach(s => console.log(s.name))
    }
    else{
      let filtered_list = list_with_songs.filter(s => type_of_list === s.type_list)
      filtered_list.forEach(s => console.log(s.name))
    }
  }
  
  songs([3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite']
  )
  