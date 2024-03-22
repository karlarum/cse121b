myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

//Create a function that will take a list, and a callback function to produce an HTML template.
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

//Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

//Create a function that will take a place string and return that string embedded in some html.
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

//Call the function above once for the placesLived list and again for the favoriteFoods list.
foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);

// //Step 4
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods [3];

// //step 5
// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//Write a function using a .forEach method to loop over an array and output it's contents in a <ul>
// const foodsElement = document.querySelector("#favorite-foods");
// function createandAppendFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createandAppendFoodItem);

//write a function using a .map method to loop over an array and output it's contents in a <ul>
// const foodsElement = document.querySelector("#favorite-foods");
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement("li");
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }

// document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
//   .map((food) => `<li>${food}</li>`)
//   .join("");