const emoji = document.getElementById("emoji");
const category = document.getElementById("category");
const message = document.getElementById("message");
const button = document.getElementById("randomBtn");
const content = document.getElementById("content");
const footer = document.getElementById("footerText");
const subtitle = document.getElementById("subtitle");

const faces = [
    ":)",
    ":D",
    ":>",
    "^_^",
    "(•ᴗ•)",
    "(˶ᵔ ᵕ ᵔ˶)",
    "૮₍ ˶•⤙•˶ ₎ა",
    "ʕ•ᴥ•ʔ",
    "( ◜◡◝ )"
];

const buttonTexts = [
    "Open something",
    "Another one.",
    "Keep looking.",
    "Again.",
    "Still curious?",
    "One more.",
    "Surprise me."
];

const subtitles = [
    "Take whatever you need.<br>Leave whenever you want.",
    "Stay for five seconds.<br>Or five minutes.",
    "Nothing important here.<br>Probably.",
    "Welcome.<br>That's enough.",
    "Keep whatever makes you smile.",
    "There's no right way to be here."
];

const categoryColors = {
    "Thought": "#DCEBFF",
    "Found Note": "#DCEBFF",
    "Margin Note": "#DCEBFF",
    "Coffee Stain": "#DCEBFF",
    "Page 17": "#DCEBFF",

    "Reminder": "#E6F5E8",

    "Tiny Story": "#FFF3DD",

    "Tiny Laugh": "#FFF6C9",

    "Pocket Receipt": "#ECECEC",

    "Fortune": "#FFE7D6"
};

let lastIndex = -1;

// Random subtitle when page opens
subtitle.innerHTML =
subtitles[Math.floor(Math.random() * subtitles.length)];

function showCard() {

    let index;

    do {
        index = Math.floor(Math.random() * cards.length);
    } while (index === lastIndex);

    lastIndex = index;

    const card = cards[index];

    category.textContent = `${card.icon} ${card.title}`;
    message.innerHTML = card.text.replace(/\n/g, "<br>");

    // Category color
    category.style.background =
        categoryColors[card.title] || "#EAF4EC";

    // Animation
    content.classList.remove("fade");
    void content.offsetWidth;
    content.classList.add("fade");

    // Random emoji
    emoji.textContent =
        faces[Math.floor(Math.random() * faces.length)];

    // Random button text
    button.textContent =
        buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    // Footer
    footer.textContent = "made with curiosity.";
}

button.addEventListener("click", showCard);
