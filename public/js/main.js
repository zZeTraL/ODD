import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js"

let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let dice = document.getElementById("rollTheDiceBtn");
dice.addEventListener('click', () => {
    let faceValue, output;
    faceValue = Math.floor(Math.random() * 6);
    output = "&#x268" + faceValue + "; ";
    document.getElementById('dice').innerHTML = output;
})

window.onload = function(){
    let displayContainer = document.getElementById("displayContainer");
    let chanceCard = document.getElementById("chanceCard");
    let previousCardID = undefined;
    let wait = false;
    chanceCard.addEventListener('click', () => {
        if (!wait) {
            wait = true;
            let randomValue = Math.floor(Math.random() * 11);
            if (previousCardID === undefined) {
                previousCardID = randomValue;
                displayContainer.children[randomValue.toString()].classList.remove("display__none");
            } else {
                displayContainer.children[previousCardID.toString()].classList.add("display__none");
                previousCardID = randomValue;
                displayContainer.children[randomValue.toString()].classList.remove("display__none");
            }
            wait = false;
        }
    })
}