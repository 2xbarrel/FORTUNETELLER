let card = document.getElementById("card");
let cardname = document.getElementById("cardname");
let telling = document.getElementById("telling");
let button = document.getElementById("button");

button.addEventListener("click", e => {
    let arcana = Math.floor(Math.random() * 22);
    let readingsNum = Math.floor(Math.random() * 10);
    card.src = `cards/${reading[arcana].name}.png`;
    cardname.innerHTML = reading[arcana].name;
    telling.innerHTML = reading[arcana].readings[readingsNum];
});


// woaw look i made a change to the file and now i will upload it on github