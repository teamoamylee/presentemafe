const questions = [
    {
        question: "Você me ama?",
        options: ["Sim", "Não"]
    },
    {
        question: "Hoje é um dia muito especial! Você sabe a razão?",
        options: ["Sim", "Não"]
    },
    {
        question: "É seu aniversário!",
        options: ["Ok", "Cancel"]
    }
    {
        question: "Parabéns pelos 18 anos, vida!",
        options: ["Ok", "Cancel"]
    },
    {
        question: "Já podemos beber e farrear rs",
        options: ["Sim", "Claro"]
    },
    {
        question: "Para comemorar essa data especial, eu tenho um presente para você!",
        options: ["Continue", "Cancel"]
    },
    {
        question: "Parabéns! Você desbloqueou 120 reais!",
        options: ["Obrigada"]
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const buttonsContainer = document.getElementById('buttons-container');

    // Clear previous content
    questionContainer.innerHTML = '';
    buttonsContainer.innerHTML = '';

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.createElement('h2');
        questionElement.textContent = currentQuestion.question;

        questionContainer.appendChild(questionElement);

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = handleAnswer;
            buttonsContainer.appendChild(button);
        });
    }
}

function handleAnswer() {
    currentQuestionIndex++;
    showQuestion();
}

document.addEventListener('DOMContentLoaded', showQuestion);
