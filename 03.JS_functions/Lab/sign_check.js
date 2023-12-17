
function sign_check(num1, num2,num3){
  let my_list  = [num1, num2, num3].filter(x => x < 0);
  if (my_list.length % 2 == 0) {
    console.log("Positive")
  }
  else {
    console.log("Negative")
  }

}

sign_check(-1, -4, 2)
