function list_of_names(list){
 list.sort( (a,b) => {
    return a.localeCompare(b);
  })
  for (i=0; i< list.length; i+=1){
    console.log(`${i+1}.${list[i]}`)
  }
}
list_of_names(["John", "Bob", "Christina", "Ema"])
