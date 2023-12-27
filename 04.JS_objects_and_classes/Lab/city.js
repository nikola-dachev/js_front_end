function city(object_city){
    let object_entries = Object.entries(object_city)
    for (let [key, value] of object_entries){
      console.log(`${key} -> ${value}`)
    }
  }
  
  city({
      name: "Sofia",
      area: 492,
      population: 1238438,
      country: "Bulgaria",
      postCode: "1000"
  }
  )
  