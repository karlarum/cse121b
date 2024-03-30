/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        //Create an HTML <article> element (createElement)
        const article = document.createElement("article");
        
        //Create an HTML <h3> element and add the temple's templeName property 
        //to this new element.
        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        
        //Create an HTML <img> element and add the temple's imageUrl property to 
        //the src attribute and the temple's location property to the alt attribute.
        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;
        
        //Append the <h3> element and the <img> element to the <article> element 
        //as children. (appendChild)
        article.appendChild(templeName);
        article.appendChild(templeImage);
        
        //Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = " ";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    //In this function, first call the reset function to clear the output.
    reset();
    
    //Define a variable named filter that obtains the value of the HTML 
    //element with the ID of filtered (The pull-down menu).
    const filter = document.getElementById("filtered").value;

    //Use a switch statement that uses the filter value as the selector 
    //responding to four (4) cases
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }

}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
