function json_convert_to_object(text){
    let obj = JSON.parse(text)
    for (let [key , value] of Object.entries(obj)){
      console.log(`${key}: ${value}`)
    }
  }
  
  json_convert_to_object('{"name": "George", "age": 40, "town": "Sofia"}')
  