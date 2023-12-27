function movies(input){
    let movies_objects = []
    for (let command of input){
      if (command.includes("addMovie")){
        let movie_name = command.split("addMovie ")[1]
        movies_objects.push({name: movie_name})
      }
      
      else if (command.includes("directedBy")){
        let [movie_name, director] = command.split(" directedBy ")
        let searching_object = movies_objects.find((el) => el.name === movie_name)
        if (searching_object){
          searching_object['director'] = director
        }
      }
      
      else if (command.includes("onDate")){
        let [movie_name, date] = command.split(" onDate ")
        let searching_object = movies_objects.find((el) => el.name === movie_name)
        if (searching_object){
          searching_object['date'] = date
        }
      }
    }
    for (let item of movies_objects){
      if (item.name && item.director && item.date){
        console.log(JSON.stringify(item))
      }
    }
  }
  
  