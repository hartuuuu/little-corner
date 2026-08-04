const emoji = document.getElementById("emoji");
const category = document.getElementById("category");
const message = document.getElementById("message");
const button = document.getElementById("randomBtn");
const content = document.getElementById("content");
const footer = document.getElementById("footerText");

const faces = [
    ":)",
    ":D",
    ":>",
    "^_^",
    "(•‿•)",
    "(｡•‿•｡)",
    "ʕ•ᴥ•ʔ",
    "•ᴗ•"
];

const buttonTexts = [
    "Open something",
    "Another one",
    "Keep looking",
    "Again",
    "Still curious?",
    "One more",
    "Surprise me"
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

    // Fade animation
    content.classList.remove("fade");
    void content.offsetWidth;
    content.classList.add("fade");

    // Random face
    emoji.textContent =
        faces[Math.floor(Math.random() * faces.length)];

    // Random button text
    button.textContent =
        buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    // Footer
    footer.textContent = "made with curiosity.";
}

button.addEventListener("click", showCard);
