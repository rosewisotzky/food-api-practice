console.log("Delicious")

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
    return `
    <div class="lunchBox">
    <h1>${tastyTreats.name}</h1>
    <section>${tastyTreats.category}</section>
    <aside>${tastyTreats.ethnicity}</aside>
    </div>
    `
}

const addHTML = (foodString) => {
   foodList.innerHTML += foodString;
}

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            console.log(food)
            const foodAsHTML = createHTML(food)
            console.log(foodAsHTML)
            addHTML(foodAsHTML)
        })
    })