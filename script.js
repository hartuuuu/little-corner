const category = document.querySelector(".category");
const message = document.querySelector(".message");
const button = document.getElementById("randomBtn");

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

}

button.addEventListener("click", showCard);
