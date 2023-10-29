function checkAnswers() {
    let answers = ["Groundwater", "Doing laundry","Approximately 70%","Water footprint","Using a drip irrigation system","2.5%","Agricultural runoff","8 glasses (approximately 2 liters)","Taking a shower","50-60%"];
    let correctCount = 0;
    let incorrectQuestions = [];

    for (let i = 1; i <= answers.length; i++) {
        let selectedAnswer = document.querySelector('input[name="pergunta' + i + '"]:checked');

        if (selectedAnswer) {
            let userInput = selectedAnswer.value;

            if (userInput === answers[i - 1]) {
                correctCount++;
            } else {
                incorrectQuestions.push(i);
            }
        } else {
            incorrectQuestions.push(i);
        }
    }

    displayResults(correctCount, incorrectQuestions);

    return false;
}

function displayResults(correctCount, incorrectQuestions) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (incorrectQuestions.length === 0) {
        resultsDiv.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else {
        resultsDiv.textContent = "Você acertou " + correctCount + " de 10 perguntas e errou nas perguntas: " + incorrectQuestions.join(", ");
    }
}