function convert_to_json(first_name, last_name, hair_color){
    my_obj= {
      "name": first_name,
      "lastName": last_name,
      "hairColor": hair_color
    }
    let json_string = JSON.stringify(my_obj)
  
    console.log(json_string)
  }
  
  convert_to_json('George', 'Jones', 'Brown')
  