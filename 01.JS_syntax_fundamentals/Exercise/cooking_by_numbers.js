function cooking_by_numbers(num , op_1 , op_2, op_3, op_4, op_5){

  num = Number(num)
  let my_list = []
  my_list.push(op_1)
  my_list.push(op_2)
  my_list.push(op_3)
  my_list.push(op_4)
  my_list.push(op_5)

  for (i= 0; i < my_list.length; i++){
    if (my_list[i] ==="chop"){
    num /=2
  }
    else if (my_list[i] ==="dice") {
      num = Math.sqrt(num)
    }
    else if (my_list[i] === "spice"){
      num +=1
    }
    else if (my_list[i] ==="bake"){
      num *=3
    }
    else if(my_list[i] === "fillet"){
      num *=0.8
    }

    console.log(num)
  }

}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')