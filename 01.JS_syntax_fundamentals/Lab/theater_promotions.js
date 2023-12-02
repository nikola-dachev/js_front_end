function solve(day, age) {

  if (day =="Weekday" && 0 <= age && age <= 18){
    console.log("12$")
  }

  else if (day =="Weekend" && 0 <= age && age <= 18){
    console.log("15$")
  }

  else if (day == "Holiday" && 0 <= age && age <= 18) {
    console.log("5$")
  }

  else if (day =="Weekday" && 18 < age && age <= 64){
    console.log("18$")
  }

  else if (day =="Weekend" && 18 < age && age <= 64){
    console.log("20$")
  }

  else if (day == "Holiday" && 18 < age && age <= 64) {
    console.log("12$")
  }

  else if (day =="Weekday" && 64 < age && age <= 122){
    console.log("12$")
  }

  else if (day =="Weekend" && 64 < age && age <= 122){
    console.log("15$")
  }

  else if (day == "Holiday" && 64 < age && age <= 122) {
    console.log("10$")
  }

  else {
    console.log("Error!")
  }

}
