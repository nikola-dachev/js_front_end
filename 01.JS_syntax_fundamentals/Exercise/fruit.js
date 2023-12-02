function solve(fruit, weight_grams, price_kg) {
    let money= (weight_grams / 1000) * price_kg;
    console.log(`I need $${money.toFixed(2)} to buy ${(weight_grams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

