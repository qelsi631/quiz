const questions = [
    {
        question: "Cili eshte kanun i vertet?",
        options: ["Kanuni Katilit", "Kanuni Dukagjinit", "Kanuni Shkodres", "Kanuni Elbasanit"],
        answer: "Kanuni Dukagjinit",
    },
    {
        question: "Cili eshte oqeani me i madh ne bote",
        options: ["Oqeani Atlantik", "Oqeani Paqsor", "Oqeani indian", "Oqeani Kinez"],
        answer: "Oqeani Paqsor"
    },
    {
        question: "Kush e fitoi kupen e botes ne 2018",
        options: ["Gjermania", "Kroacia", "Spanja", "Franca"],
        answer: "Franca"
    },
    {
        question: "Cila eshte gjuha me e folur ne bote",
        options: ["Anglishtja", "Spanjishtja", "Kinezishtja", "Indianishtja"],
        answer: "Kinezishtja"
    },
    {
        question: "Cili eshte shteti me i vogel ne bote",
        options: ["Kosova", "Monaco", "Vatikani", "Hong Kong"],
        answer: "Vatikani"
    },
    {
        question: "Aktori me i mire i gjitha kohrave",
        options: ["Marlon Brando", "Leonardo Di Caprio", "Al Pacino", "Robert De Niro"],
        answer: "Marlon Brando"
    },
    {
        question: "Cila eshte kafsha me e madhe ne toke",
        options: ["Luani", "Elefanti", "Gjirafa", "Peshkaqeni"],
        answer: ["Elefanti"]
    }

];

let currentQuestionIndex = 0;

document.getElementById("start-button").onclick = startQuiz;

function startQuiz() {
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = checkAnswer;
        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        alert("Sakt!");
    } else {
        alert("Gabim! Pergjigja e ver8 " + correctAnswer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Kuizi Perfundoi Flm!");
        // Optionally, reset the quiz or show scores here
    }
}

