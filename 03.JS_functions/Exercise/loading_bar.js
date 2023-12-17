function loading_bar(number){
  if (number === 100){
    console.log("100% Complete!\n[%%%%%%%%%%]")
  }
  else{
    let number_of_percentage = Math.floor(number/10)
    let percent = "%".repeat(number_of_percentage)
    let dots = ".".repeat(10-number_of_percentage)
    console.log(`${number}% [${percent}${dots}]\nStill loading...`)
  }
}

loading_bar(30)
