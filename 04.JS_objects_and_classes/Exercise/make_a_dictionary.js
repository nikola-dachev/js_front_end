
function dictionary(input){
    let dict = {};
    for (let element of input){
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);        
    } 
        
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a,b) => a.localeCompare(b))
    for (let current_key of sortedKeys){
      let definition = dict[current_key]
      console.log(`Term: ${current_key} => Definition: ${definition}`)
    }
}
