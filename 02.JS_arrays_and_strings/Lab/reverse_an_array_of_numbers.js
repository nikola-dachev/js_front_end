function reverse_array(n, arr){
  let new_arr = arr.slice(0,n).reverse()
  console.log(new_arr.join(" "))
}

reverse_array(3, [10, 20, 30, 40, 50])