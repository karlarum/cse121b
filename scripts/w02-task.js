/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Karla Rummler";
let currentYear = "2024";
let profilePicture = "images/IMG_1962.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */

//Declare an array variable to hold your favorite foods
let favoriteFood = ["Sushi", "Calamari", "Beef Stroganoff", "Sinigang", "Doner Kebab", "Koobideh"]

//Modify the HTML element with the id of food to display your favorite foods array.
foodElement.textContent = favoriteFood.join(", ");

//Declare and instantiate a variable to hold another single favorite food item
let addFavoriteFood = "Crab Cakes";

//Add the value stored in this new variable to your favorite food array
favoriteFood.push(addFavoriteFood);

//Append the new array values onto the displayed content of the HTML element 
//with the id of food using a += operator and a <br> (line break character) to 
//provide a line break
foodElement.innerHTML += `<br>${favoriteFood}`;

//Remove the first element in the favorite food array
favoriteFood.shift();

//Append the array output showing the modified array using a line break
foodElement.innerHTML += `<br>${favoriteFood}`;

//Remove the last element in the favorite food array
favoriteFood.pop();

//Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFood}`;