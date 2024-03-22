/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Karla Rummler",
    photo: "images/IMG_1962.jpg",
    favoriteFoods: [
        "Sushi",
        "Calamari",
        "Beef Stroganoff",
        "Sinigang",
        "Doner Kebab",
        "Koobideh"
    ],
    hobbies: [
        "hiking",
        "backpacking",
        "running",
        "swimming",
        "reading"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Huntington Beach, CA",
        length: "21 years"
    },
    {
        place: "Provo, UT",
        length:"3 years"
    },
    {
        place: "Rancho Cucamonga, CA",
        length: "4 years"
    },
    {
        place: "Destin, FL",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;

/* Name */
document.getElementById("photo").src = myProfile.photo;

/* Photo with attributes */
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
let placesLived = document.getElementById("places-lived");

myProfile.placesLived.forEach(place => {
let dt = document.createElement("dt");
dt.textContent = place.place;

let dd = document.createElement("dd");
dd.textContent = place.length;

placesLived.appendChild(dt);
placesLived.appendChild(dd);
});

