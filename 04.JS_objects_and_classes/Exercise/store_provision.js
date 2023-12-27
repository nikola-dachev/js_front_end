function store_provision(stock_list, ordered_product_list){
    let stock_dict = {}
    
    while (stock_list.length >0){
      current_product = stock_list.shift()
      current_quantity = stock_list.shift()
      stock_dict[current_product] = Number(current_quantity)
    }
    
    while (ordered_product_list.length >0){
      current_product = ordered_product_list.shift()
      current_quantity = Number(ordered_product_list.shift())
      if (current_product in stock_dict){
        stock_dict[current_product] += current_quantity
      }
      else{
        stock_dict[current_product] = current_quantity
      }
    }
    for ([key, value] of Object.entries(stock_dict)){
      console.log(`${key} -> ${value}`)
    }
    
  }
  
  store_provision([
  'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
  ],
  [
  'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
  ]
  )
  
  