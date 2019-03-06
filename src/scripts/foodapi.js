console.log("Delicious")

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

fetch("http://localhost:8088/food")
    .then(function(foods) {
        return foods.json()
    })
    .then(function(parsedFoods) {
        console.log(parsedFoods)
    })

    console.log ("Savory")