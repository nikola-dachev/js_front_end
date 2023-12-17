function password_validator(pass){

  let is_valid = true;
  result = []
  if (!(pass.length >= 6 && pass.length <=10)){
    is_valid = false
    result.push("Password must be between 6 and 10 characters\n")
  }
  let first_regex = /^[A-Za-z0-9]+$/g
  let a = pass.match(first_regex)

  if (!a) {
    is_valid = false
    result.push("Password must consist only of letters and digits\n")
  }
  let second_regx = /[A-Za-z0-9]+[0-9]{2,}/g
  let b = pass.match(second_regx)

  if (!b) {
    is_valid= false
    result.push("Password must have at least 2 digits\n")
  }
  if (is_valid) {
    console.log("Password is valid")
  }
  else{
    console.log(result.join(""))
  }
}

password_validator('logIn')
