var scores = document.querySelector("#scores");
var scoresValue = scores.textContent;
var timerDiv = document.querySelector("#timer-div");
var timer = document.querySelector("#timer");
var score = 0;
var timeGiven =75;
var interval;
var currentQ = 0;
var secondsElapsed = 0;
var highScores = [];
var viewHighScoresBtnEl = document.querySelector("#viewScores")
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the Above"],
        answer: "pop()"
    },
    {
        title: "Which built-in method returns the calling string value converted to lower case?",
        choices: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the Above"],
        answer: "toLowerCase()"
    },
    {
        title: "Which of the following function of Number object returns the number's value",
        choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        answer: "valueOf()"
    },
    {
        title: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: ["concat()", "join()", "pop()", "map()"],
        answer: "join()"
    }
];

function startTimer(){
    timer.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timer.textContent = timeGiven-secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQ = questions.length; 
            nextQuestion();
        }
    }, 1000);
}

function stopTimer () {
    clearInterval(interval);
}

function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(quizEl);
        show(inputScoreEl);
        timer.textContent = 0;
    }
}