function odd_occurences(text){
    text = text.toLowerCase()
    let list_of_elements = text.split(" ")
    let map = new Map()
    for (let el of list_of_elements){
      if (map.has(el)){
        old_value = map.get(el)
        new_value = old_value +1
        
        map.set(el, new_value)
      }
      else{
        map.set(el, 1)
      }
    }
    let result = []
    for (let [el, occurences] of map){
      if (occurences % 2 !== 0){
        result.push(el)
      }
    }
    console.log(result.join(" "))
  }
  
  odd_occurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
  