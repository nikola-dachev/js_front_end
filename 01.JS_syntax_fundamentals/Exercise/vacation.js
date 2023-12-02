function solve(number_of_people, type_of_group, day){
  let final_total;
  if (type_of_group == "Students"){
    if (day == "Friday"){
      final_total = number_of_people* 8.45
    }
    else if (day == "Saturday"){
      final_total = number_of_people * 9.80
    }
    else if (day == "Sunday"){
      final_total = number_of_people *10.46
    }
  }

  else if (type_of_group =="Business") {
    if (day == "Friday"){
      final_total = number_of_people* 10.90
    }
    else if (day == "Saturday"){
      final_total = number_of_people * 15.60
    }
    else if (day == "Sunday"){
      final_total = number_of_people * 16
    }
  }

  else if (type_of_group =="Regular") {
    if (day == "Friday"){
      final_total = number_of_people* 15
    }
    else if (day == "Saturday"){
      final_total = number_of_people * 20
    }
    else if (day == "Sunday"){
      final_total = number_of_people * 22.50
    }
  }

  if (type_of_group == "Students" && number_of_people >= 30) {
    final_total *= 0.85
  }

  if (type_of_group == "Business" && number_of_people >= 100) {
    let price_for_10_people = (final_total / number_of_people) * 10;
    final_total -= price_for_10_people
  }

  if (type_of_group =="Regular" && number_of_people >=10 && number_of_people <= 20){
    final_total *= 0.95
  }

  console.log(`Total price: ${final_total.toFixed(2)}`)
}