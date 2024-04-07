//Declare and initialize global variables
const championsElement = document.getElementById("champions");
let championList = [];

//async displayChampions function
const displayChampions = (champions) => {
    champions.forEach(champion => {
        const article = document.createElement("article");

        const name = document.createElement("h3");
        name.textContent = champion.name;

        const image = document.createElement("img");
        image.src = champion.image;
        image.alt = champion.name;

        article.appendChild(name);
        article.appendChild(image);

        championsElement.appendChild(article);
    });
};

//async getChampions function
const getChampions = async () => {
    const response = await fetch("https://run.mocky.io/v3/5ffa360c-07b2-4a31-8262-e1fe9363e1f2");
    const data = await response.json();
    const champions = Object.values(data.data).map(champion => ({
        name: champion.name,
        image: champion.image.full,
        tags: champion.tags
    }));

    return champions;
};

//reset champions element
const reset = () => {
    championsElement.innerHTML = "";
};

//filterChampions function
const filterChampions = (filter) => {
    reset();

    getChampions()
    .then(champions => {
        switch (filter) {
            case "marksman":
                displayChampions(champions.filter(champion => champion.tags.includes("marksman")));
                break;
            case "notmarksman":
                displayChampions(champions.filter(champion => !champion.tags.includes("marksman")));
                break;
            case "all":
                displayChampions(champions);
                break;
        }
    });
};

//add event listener
document.querySelector("#filtered").addEventListener("change", () => {
    filterChampions(document.querySelector("#filtered").value)
});

//display champions when page loads
getChampions()
    .then(champions => {
        championList = champions;
        displayChampions(champions);
    });