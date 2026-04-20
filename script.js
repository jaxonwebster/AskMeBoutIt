const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Hailey secretly thinks YES!",
    "Ask yourself: Would an idiot do that?",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "No!",
    "If it's a weekday, no. If it's a weekend, yes.",
    "If you do, something bad will happen.",
    "Jaxon says no.",
    "Don't ask me, ask Carrie.",
    "What would Charity do?",
    "Definitely",
    "100%",
    "In your dreams, pal",
    "Only if you do 10 pushups first"
];

const askedQuestions = [];

function getAnswer() {
    const question = document.getElementById("question").value.trim();
    const ballText = document.getElementById("ballText");
    const ball = document.querySelector(".ball-container");

    if (!question) {
        setBallText("Ask a question!");
        return;
    }

    if (askedQuestions.includes(question)) {
        setBallText("You already asked that!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];

    ballText.style.opacity = 0;
    ball.classList.add("shake");

    setTimeout(() => {
        ball.classList.remove("shake");
        setBallText(answer);
        ballText.style.opacity = 1;
    }, 800);

    askedQuestions.push(question);

    // clear input
    document.getElementById("question").value = "";
}

function setBallText(text) {
    const el = document.getElementById("ballText");

    el.innerHTML = text;

    // reset animation
    el.classList.remove("show");
    void el.offsetWidth;
    el.classList.add("show");

    // start large
    let size = 22;
    el.style.fontSize = size + "px";

    // shrink until it fits height
    while (el.scrollHeight > el.clientHeight && size > 10) {
        size--;
        el.style.fontSize = size + "px";
    }

    // EXTRA: shrink more if text is long (triangle safety)
    if (text.length > 50) {
        el.style.fontSize = (size - 2) + "px";
    }
}