const category = document.querySelector(".category");
const message = document.querySelector(".message");
const button = document.getElementById("randomBtn");
const content = document.getElementById("content");

const buttonTexts = [

"Explore",

"Again",

"Another one",

"Keep going",

"Surprise me",

"One more",

"What's next?"

];

let lastIndex = -1;

function showCard() {

    let index;

    do {
        index = Math.floor(Math.random() * cards.length);
    } while (index === lastIndex);

    lastIndex = index;

    const card = cards[index];

category.textContent = `${card.icon} ${card.title}`;

message.innerHTML = card.text.replace(/\n/g, "<br>");

content.classList.remove("fade");
void content.offsetWidth;
content.classList.add("fade");

button.textContent =
buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

}
