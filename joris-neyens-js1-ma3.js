// question 1
const mathFunction = (a, b) => a - b;

// question 2

fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        getResults(json);
    })
    .catch(function(error) {
    window.location.replace("error.html");
    })


function getResults(json) {
    
    const gameResults = json.results;

    for(let i = 0; i < gameResults.length; i++) {
    console.log(gameResults[i].name);
    }
}

// question 3
const changeText = document.querySelector("p");
const newText = changeText.innerHTML

const formattedText = newText.replace("cats", "giraffes");

changeText.innerText = formattedText;

// question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let idNumber = params.get("userId")
let userId

if (params.has("userId")) {
    if (idNumber < 10) {
    document.location.href = "https://first.html/";
  } else {
    document.location.href = "https://second.html";
  }
} else { 
    document.location.href = "https://third.html";
}

// question 5
const container = document.querySelector(".container")
const button = document.querySelector(".btn")

container.removeChild(button);

// question 6
const animals = document.querySelector(".animals")

const newLi = document.createElement("li");
newLi.className ="parrots"

newLi.innerHTML = "Parrots"
animals.appendChild(newLi);

const elephants = document.querySelector(".elephants")
elephants.before(newLi);

// question 7

fetch("https://api.rawg.io/api/games/3801")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        gamesJson(json);
    })
    .catch(function(error) {
        console.log (error);
    })

function gamesJson(json) {
    const rating = document.querySelector(".rating");
    rating.innerHTML = json.rating;
}