console.log("YOU GOT THIS PAL")

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

// fetch("http://localhost:8088/food")
//     .then(function(foods) {
//         return foods.json()
//     })
//     .then(function(parsedFoods) {
//         console.log("parsed foods", parsedFoods)
//     })

//     console.log ("Savory")

// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template is the HTML representation for a food item.
// Create a function that inserts an HTML representation of a food into the DOM
let foodList = document.querySelector(".foodList");
const createHTML = (tastyTreats) => {
    // console.log(tastyTreats)
    console.log(tastyTreats.ingredients)
    let contents = " ";
    // for (let i = 0; i < tastyTreats.ingredients.length; i++) {
    //     contents += tastyTreats.ingredients[i].text + ", ";
    //     console.log(tastyTreats.ingredients[i])
    // }
    tastyTreats.ingredients.forEach(item => {
        contents += item.text + ", "
    })
    return `
    <div class="lunchBox">
    <h1>${tastyTreats.name}</h1>
    <section>${tastyTreats.category}</section>
    <aside>${tastyTreats.ethnicity}</aside>
    <aside>${tastyTreats.barcode}</aside>
    <aside>${contents}</aside>
    <aside>${tastyTreats.countries}</aside>
    <aside>${tastyTreats.sugar}</aside>
    <aside>${tastyTreats.energy}</aside>
    <aside>${tastyTreats.fat}</aside>
    </div>
    `
}

// const addHTML = (foodString) => {
//     foodList.innerHTML += foodString;
// }

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             console.log(food)
//             const foodAsHTML = createHTML(food)
//             console.log(foodAsHTML)
//             addHTML(foodAsHTML)
//         })
//     })

// PART TWO FETCHING OTHER PPLS DATA PRACTICE
 fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            // console.log("this is an obj", food) 
            // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    // console.log(productInfo.product.ingredients)
                    food.ingredients = productInfo.product.ingredients
                    food.countries = productInfo.product.countries
                    food.sugar = productInfo.product.nutriments.sugars_serving
                    food.energy = productInfo.product.nutriments.energy
                    food.fat = productInfo.product.nutriments.fat_serving

                    // Add representaiton to DOM
                    // console.log(food)
                    foodList.innerHTML += createHTML(food)
                })
        })
    })