
function parking_lot(input){
    let parking = []
    for (let command of input){
      let [direction, car_plate] = command.split(", ")
      if (direction === "IN" && !parking.includes(car_plate)){
        parking.push(car_plate)
      }
      else if (direction === "OUT"){
        if (parking.includes(car_plate)){
          car_index = parking.indexOf(car_plate)
          parking.splice(car_index,1)
        }
      }
    }
    if (parking.length !== 0){
      parking = parking.sort((a,b) => a.localeCompare(b))
      console.log(parking.join("\n"))
    }
    else {
      console.log(`Parking Lot is Empty`)
    }
  }
  
  parking_lot(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'OUT, CA1234TA']
  )
  