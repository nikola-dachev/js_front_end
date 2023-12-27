function towns(text){
    my_dict ={}
    for (let item of text){
      [town, latitude, longitude] = item.split(" | ")
      my_dict["town"] = town
      my_dict["latitude"] = (Number(latitude)).toFixed(2)
      my_dict["longitude"] = (Number(longitude)).toFixed(2)
      console.log(my_dict)
    }
  }
  