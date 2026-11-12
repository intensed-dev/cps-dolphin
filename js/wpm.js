const SENTENCE_PARTS = {
    subjects: [
        "the developer",
        "a curious student",
        "the young explorer",
        "a small team",
        "the programmer",
        "an experienced player",
        "the creative designer",
        "a group of friends",
        "the new application",
        "a talented artist",
        "the little robot",
        "a professional designer",
        "the software engineer",
        "the entire community",
        "a young creator",
        "an ambitious developer",
        "the friendly neighbor",
        "a passionate musician",
        "the clever scientist",
        "an adventurous traveler",
        "the experienced teacher",
        "a dedicated researcher",
        "the young musician",
        "a talented photographer",
        "the game designer",
        "a curious explorer",
        "the helpful assistant",
        "an independent creator",
        "the local community",
        "a skilled craftsman",
        "the university student",
        "a professional photographer",
        "the little child",
        "an old friend",
        "the brave knight",
        "a famous inventor",
        "the young athlete",
        "a creative writer",
        "the friendly robot",
        "an intelligent machine",
        "the entire family",
        "a hardworking student",
        "the experienced developer",
        "a group of researchers",
        "the new generation",
        "an enthusiastic gamer",
        "the digital artist",
        "a young entrepreneur",
        "the curious scientist",
        "a talented musician",
        "the local artist",
        "an ordinary person",
        "the mysterious stranger",
        "a helpful colleague",
        "the young programmer",
        "the creative team",
        "a professional gamer",
        "the passionate designer",
        "an experienced engineer",
        "the ambitious student"
    ],

    verbs: [
        "creates",
        "builds",
        "discovers",
        "explores",
        "develops",
        "designs",
        "improves",
        "examines",
        "studies",
        "tests",
        "writes",
        "finds",
        "uses",
        "makes",
        "creates",
        "investigates",
        "organizes",
        "prepares",
        "explains",
        "understands",
        "experiments with",
        "searches for",
        "works on",
        "looks at",
        "learns about",
        "compares",
        "changes",
        "repairs",
        "collects",
        "shares",
        "discusses",
        "remembers",
        "observes",
        "discovers",
        "creates",
        "builds",
        "analyzes",
        "supports",
        "encourages",
        "protects",
        "connects",
        "communicates",
        "solves",
        "challenges",
        "explains",
        "recognizes",
        "explores",
        "introduces",
        "develops",
        "designs",
        "finishes",
        "starts",
        "continues",
        "plans",
        "creates",
        "organizes",
        "experiences",
        "achieves",
        "delivers",
        "produces",
        "transforms",
        "combines",
        "builds",
        "inspires",
        "teaches",
        "helps",
        "guides",
        "discovers",
        "creates",
        "understands",
        "questions",
        "explores",
        "invests in",
        "believes in",
        "depends on",
        "focuses on",
        "concentrates on",
        "contributes to",
        "participates in",
        "prepares for",
        "looks forward to"
    ],

    objects: [
        "a useful application",
        "an interesting project",
        "a beautiful website",
        "a new technology",
        "a creative solution",
        "an exciting game",
        "a simple program",
        "a digital experience",
        "a powerful tool",
        "a unique design",
        "a wonderful idea",
        "a complex system",
        "a small prototype",
        "a better solution",
        "a new feature",
        "an innovative concept",
        "a modern interface",
        "a difficult problem",
        "an important decision",
        "a completely new approach",
        "a collection of useful resources",
        "a collection of photographs",
        "a detailed explanation",
        "a fascinating discovery",
        "a beautiful landscape",
        "a mysterious object",
        "a forgotten memory",
        "a valuable opportunity",
        "a challenging task",
        "an unusual situation",
        "a new perspective",
        "a reliable platform",
        "a creative environment",
        "a successful business",
        "a complicated algorithm",
        "an intelligent solution",
        "a simple experiment",
        "a scientific theory",
        "a historical document",
        "a remarkable achievement",
        "a difficult challenge",
        "a memorable experience",
        "a powerful computer",
        "a personal collection",
        "an exciting adventure",
        "a small community",
        "a professional portfolio",
        "a detailed report",
        "a completely different world",
        "a fascinating story",
        "a new opportunity",
        "an unexpected result",
        "a useful improvement",
        "a beautiful illustration",
        "a complex application",
        "a reliable system",
        "a creative project",
        "a practical example",
        "an interesting observation",
        "a valuable lesson",
        "a digital workspace",
        "a new strategy",
        "a challenging assignment",
        "a technical problem",
        "an incredible invention",
        "a modern solution",
        "a unique experience",
        "a growing community",
        "a different perspective",
        "an important discovery",
        "a new possibility",
        "a detailed design",
        "a fascinating experiment",
        "a helpful guide",
        "a personal website",
        "a multiplayer game",
        "a beautiful painting",
        "a complex machine",
        "an unexpected surprise"
    ],

    endings: [
        "every single day",
        "with great attention",
        "for the entire community",
        "in their free time",
        "with a lot of patience",
        "to solve difficult problems",
        "while learning new skills",
        "for future projects",
        "without making mistakes",
        "with incredible results",
        "during the early morning",
        "before the end of the week",
        "in a completely different way",
        "with the help of their friends",
        "without any additional resources",
        "for a very long time",
        "under difficult circumstances",
        "in the middle of the night",
        "during their free time",
        "with a clear purpose",
        "for the next generation",
        "in a peaceful environment",
        "with enough experience",
        "after several attempts",
        "before making a final decision",
        "despite all the difficulties",
        "with a positive attitude",
        "in the modern world",
        "for everyone involved",
        "at the right moment",
        "with surprising results",
        "in the best possible way",
        "without losing motivation",
        "through hard work and dedication",
        "with a little bit of luck",
        "over the course of several months",
        "in a matter of minutes",
        "for many different reasons",
        "with a strong sense of purpose",
        "while working together"
    ],

    connectors: [
        "because",
        "while",
        "although",
        "when",
        "since",
        "unless",
        "after",
        "before",
        "whenever",
        "whereas",
        "even though",
        "as soon as",
        "once",
        "if",
        "until"
    ],

    secondarySubjects: [
        "the technology",
        "the entire team",
        "their friends",
        "the new system",
        "the community",
        "the young developer",
        "the creative team",
        "the experienced designer",
        "the local organization",
        "the entire family",
        "the research group",
        "the next generation",
        "the new application",
        "the talented artist",
        "the software engineer",
        "the university",
        "the local community",
        "the young explorer",
        "the entire company",
        "the development team",
        "the curious student",
        "the professional designer",
        "the scientific community",
        "the new generation of creators",
        "the group of friends",
        "the talented musician",
        "the little robot",
        "the entire organization",
        "the experienced researcher",
        "the creative department",
        "the young programmer",
        "the local population",
        "the group of students",
        "the international team",
        "the new generation of developers"
    ],

    secondaryVerbs: [
        "continues to improve",
        "starts to understand",
        "begins to explore",
        "learns to appreciate",
        "tries to develop",
        "works hard to succeed",
        "finds new opportunities",
        "continues to grow",
        "starts to experiment",
        "begins to understand the situation",
        "works together to find solutions",
        "tries to make a difference",
        "learns from previous mistakes",
        "continues to develop new ideas",
        "starts to recognize the problem",
        "begins to create something new",
        "works towards a better future",
        "tries to understand the results",
        "finds ways to improve",
        "learns to work independently",
        "continues to explore new possibilities",
        "starts to question old assumptions",
        "begins to recognize new patterns",
        "works to achieve its goals",
        "tries to solve the problem",
        "learns to communicate effectively",
        "continues to support the community",
        "starts to make important decisions",
        "begins to develop new strategies",
        "finds inspiration in unexpected places",
        "works together on a common goal",
        "tries to create a better experience",
        "learns to appreciate different perspectives",
        "continues to make steady progress",
        "starts to discover new interests"
    ]
};


// DOM elements
const testElement = document.getElementById("test");
const textElement = document.getElementById("text");

const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const timerElement = document.getElementById("timer");

const hintElement = document.getElementById("hint");
const resultElement = document.getElementById("result");


// Test settings
let duration = 30;
let words = [];

let wordIndex = 0;
let charIndex = 0;

let started = false;
let finished = false;

let startTime = 0;
let timerInterval = null;

let correctChars = 0;
let incorrectChars = 0;
let totalTyped = 0;


// Helpers
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// Sentence generation
function generateSentence() {
    const subject = randomItem(SENTENCE_PARTS.subjects);
    const verb = randomItem(SENTENCE_PARTS.verbs);
    const object = randomItem(SENTENCE_PARTS.objects);
    const ending = randomItem(SENTENCE_PARTS.endings);

    const firstPart = `${subject} ${verb} ${object} ${ending}`;

    if (Math.random() > 0.5) {
        return firstPart + ".";
    }

    const connector = randomItem(SENTENCE_PARTS.connectors);
    const secondarySubject = randomItem(SENTENCE_PARTS.secondarySubjects);
    const secondaryVerb = randomItem(SENTENCE_PARTS.secondaryVerbs);

    return `${firstPart}, ${connector} ${secondarySubject} ${secondaryVerb}.`;
}


function generateWords() {
    words = [];

    while (words.length < 80) {
        words.push(...generateSentence().split(" "));
    }
}


// Rendering
function renderText() {
    textElement.innerHTML = "";

    words.forEach((word, index) => {
        const wordElement = document.createElement("span");

        wordElement.className = "wpm-word";

        [...word].forEach((character, characterIndex) => {
            const span = document.createElement("span");

            span.className = "wpm-char";
            span.textContent = character;

            if (
                index === wordIndex &&
                characterIndex === charIndex
            ) {
                span.classList.add("current");
            }

            wordElement.appendChild(span);
        });

        textElement.appendChild(wordElement);
    });

    updateCurrentCharacter();
}


function updateCurrentCharacter() {
    document.querySelectorAll(".wpm-char.current")
        .forEach(element => {
            element.classList.remove("current");
        });

    const currentWord = textElement.children[wordIndex];

    if (!currentWord) return;

    const character = currentWord.children[charIndex];

    if (character) {
        character.classList.add("current");
        return;
    }

    const nextWord = textElement.children[wordIndex + 1];

    if (nextWord && nextWord.firstChild) {
        nextWord.firstChild.classList.add("current");
    }
}


function appendWords() {
    const oldLength = words.length;

    while (words.length < oldLength + 30) {
        words.push(...generateSentence().split(" "));
    }

    const fragment = document.createDocumentFragment();

    for (let i = oldLength; i < words.length; i++) {
        const wordElement = document.createElement("span");

        wordElement.className = "wpm-word";

        [...words[i]].forEach(character => {
            const span = document.createElement("span");

            span.className = "wpm-char";
            span.textContent = character;

            wordElement.appendChild(span);
        });

        fragment.appendChild(wordElement);
    }

    textElement.appendChild(fragment);
}


// Test lifecycle
function startTest() {
    if (started || finished) return;

    started = true;
    startTime = performance.now();

    hintElement.style.display = "none";

    timerInterval = setInterval(updateTimer, 50);
}


function updateTimer() {
    if (!started || finished) return;

    const elapsed = (performance.now() - startTime) / 1000;
    const remaining = Math.max(0, duration - elapsed);

    timerElement.textContent = remaining.toFixed(1) + "s";

    const elapsedMinutes = elapsed / 60;

    const currentWpm = elapsedMinutes > 0
        ? Math.round((correctChars / 5) / elapsedMinutes)
        : 0;

    const accuracy = totalTyped > 0
        ? Math.round((correctChars / totalTyped) * 100)
        : 100;

    wpmElement.textContent = currentWpm;
    accuracyElement.textContent = accuracy + "%";

    if (remaining <= 0) {
        finishTest();
    }
}


function finishTest() {
    if (finished) return;

    finished = true;
    started = false;

    clearInterval(timerInterval);

    timerElement.textContent = "0.0s";

    const elapsedMinutes = duration / 60;

    const finalWpm = Math.round(
        (correctChars / 5) / elapsedMinutes
    );

    const finalAccuracy = totalTyped > 0
        ? Math.round((correctChars / totalTyped) * 100)
        : 100;

    document.getElementById("final-wpm").textContent = finalWpm;
    document.getElementById("final-accuracy").textContent = finalAccuracy + "%";
    document.getElementById("final-duration").textContent = duration + "s";

    resultElement.classList.add("is-visible");
    hintElement.style.display = "none";
}


// Input handling
function handleInput(event) {
    if (finished) return;

    if (
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
    ) return;

    if (event.key === "Tab") {
        event.preventDefault();
        return;
    }

    // Backspace
    if (event.key === "Backspace") {
        event.preventDefault();

        if (charIndex > 0) {
            charIndex--;

            const currentWord = textElement.children[wordIndex];
            const character = currentWord.children[charIndex];

            if (character.dataset.status === "correct") {
                correctChars--;
                totalTyped--;
            } else if (character.dataset.status === "incorrect") {
                incorrectChars--;
                totalTyped--;
            }

            character.classList.remove("correct", "incorrect");
            delete character.dataset.status;

            updateCurrentCharacter();
            updateTimer();
        }

        return;
    }

    // Space
    if (event.key === " ") {
        event.preventDefault();

        if (!started) startTest();

        if (charIndex > 0) {
            wordIndex++;
            charIndex = 0;

            if (wordIndex >= words.length - 10) {
                appendWords();
            }

            updateCurrentCharacter();
        }

        return;
    }

    // Ignore non-character keys
    if (event.key.length !== 1) return;

    event.preventDefault();

    if (!started) startTest();

    const currentWord = textElement.children[wordIndex];

    if (!currentWord) return;

    const expected = words[wordIndex][charIndex];

    if (expected === undefined) return;

    const character = currentWord.children[charIndex];

    if (event.key === expected) {
        character.classList.add("correct");
        character.dataset.status = "correct";

        correctChars++;
    } else {
        character.classList.add("incorrect");
        character.dataset.status = "incorrect";

        incorrectChars++;
    }

    totalTyped++;
    charIndex++;

    updateCurrentCharacter();
    updateTimer();
}


// Reset
function resetTest() {
    clearInterval(timerInterval);

    wordIndex = 0;
    charIndex = 0;

    started = false;
    finished = false;

    startTime = 0;

    correctChars = 0;
    incorrectChars = 0;
    totalTyped = 0;

    timerElement.textContent = duration + "s";
    wpmElement.textContent = "0";
    accuracyElement.textContent = "100%";

    resultElement.classList.remove("is-visible");
    hintElement.style.display = "block";

    generateWords();
    renderText();

    testElement.focus();
}


// Event listeners
document.addEventListener("keydown", event => {
    if (event.key === "Tab" && event.shiftKey) {
        return;
    }

    if (
        event.key === "Enter" &&
        event.target === document.body
    ) {
        resetTest();
        return;
    }

    if (event.target.closest("button")) return;

    handleInput(event);
});


testElement.addEventListener("click", () => {
    testElement.focus();
});


document.getElementById("restart").addEventListener(
    "click",
    resetTest
);


document.querySelectorAll(".wpm-setting").forEach(button => {
    button.addEventListener("click", () => {
        duration = Number(button.dataset.duration);

        document.querySelectorAll(".wpm-setting")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        resetTest();
    });
});


// Initialize
generateWords();
renderText();
timerElement.textContent = duration + "s";