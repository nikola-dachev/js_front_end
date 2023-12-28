function solve() {
   let allbuttons_ref = document.querySelectorAll('button.add-product')
   let text_area_ref = document.getElementsByTagName('textarea')[0]
   let checkout_ref = document.getElementsByClassName('checkout')[0]
   let total_sum = 0
   let all_products = []

   for (const current_button of allbuttons_ref) {
      current_button.addEventListener('click', addproduct)

   }

   function addproduct(e){
      let product_div = e.currentTarget.parentNode.parentNode
      let product_title = product_div.querySelector('.product-title').textContent
      let product_price = product_div.querySelector('.product-line-price').textContent
      text_area_ref.value += `Added ${product_title} for ${Number(product_price).toFixed(2)} to the cart.\n`
   
      total_sum += Number(product_price)
      if (!all_products.includes(product_title)){
         all_products.push(product_title)
      }
   }

   checkout_ref.addEventListener('click', checkedout)

   function checkedout(e){
      text_area_ref.value += `You bought ${all_products.join(', ')} for ${total_sum.toFixed(2)}.`

      for (const current_button of allbuttons_ref) {
         current_button.removeEventListener('click', addproduct)
         
      }
   }

  

   text_area_ref.value = ''
}