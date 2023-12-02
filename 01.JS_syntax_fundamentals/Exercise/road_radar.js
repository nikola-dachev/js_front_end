function road_radar(current_speed, area) {
  let speed_limit = 0;
  let status = ""
  let above_speed_limit = false;

  if (area ==="motorway"){
    speed_limit = 130
    if (current_speed > speed_limit){
      above_speed_limit = true
    }
  }
  else if (area === "interstate"){
    speed_limit = 90
    if (current_speed > speed_limit) {
      above_speed_limit = true
    }
  }

  else if (area === "city"){
    speed_limit = 50
    if (current_speed > speed_limit){
      above_speed_limit = true
    }
  }

  else {
    speed_limit = 20
    if (current_speed > speed_limit) {
      above_speed_limit = true
    }
  }

  if (above_speed_limit){
    if (current_speed - speed_limit <= 20) {
      status = "speeding"
    }
    else if (current_speed - speed_limit <= 40) {
      status = "excessive speeding"
    }
    else {
      status = "reckless driving"
    }
    console.log(`The speed is ${current_speed - speed_limit} km/h faster than the allowed speed of ${speed_limit} - ${status}`)
  }

  else {
    console.log(`Driving ${current_speed} km/h in a ${speed_limit} zone`)
  }

}