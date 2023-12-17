function print_matrix(n){

  for (i=0; i<n; i+=1){
    let matrix = []
    for(j=0; j<n; j+=1){
      matrix.push(n)
    }
    console.log(matrix.join(" "))
  }
}

print_matrix(3)
