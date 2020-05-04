class Question {
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
}

// All Questions
var question1 = new Question("Atilla İlhan'ın hangi isimde kitabı yoktur?", ['Hangi Ülke', 'Hangi Batı', 'Hangi Edebiyat'], 'Hangi Ülke');
var question2 = new Question("Hababam Sınıfı filmlerindeki Mahmut Hoca ne öğretmenidir?", ['Matematik', 'Edebiyat', 'Tarih'], 'Tarih');
var question3 = new Question("Atasözüne göre sırasıyla 'bakarsan' ve 'bakmazsan' ne olur?", ['Bağ ve dağ', 'Bostan ve yayla', 'Bahçe ve vadi'], 'Bağ ve dağ');
var question4 = new Question("Hollywood filmlerinde polislerin en fazla tükettikleri yiyecek ve içecek hangileridir?", ['Lahmacun ve şalgam', 'Donut ve kahve', 'Çiğköfte ve ayran'], 'Donut ve kahve');
var question5 = new Question("Atatürk hangi hastalıktan ölmüştür?", ['Siroz', 'Verem', 'Kalp krizi'], 'Siroz');
var question6 = new Question("Hangisinin ışığının üzerinizde parlaması günün saatine göre farklı şekilde yorumlanır?", ['Güneş', 'Ay', 'Yıldız'], 'Güneş');
var question7 = new Question("Mustafa Kemal Atatürk, soyadını ne zaman aldı", ['24 Kasım 1934', '18 Nisan 1932', '08 Mart 1934'], '24 Kasım 1934');
var question8 = new Question("Atatürk hangi ilçede ve nerede ölmüştür?", ['Beyoğlu , Dolmabahçe Sarayı', 'Beşiktaş , Dolmabahçe Sarayı', 'Beşiktaş , Çırağan Sarayı'], 'Beşiktaş , Dolmabahçe Sarayı');
var question9 = new Question("Atatürk ne zaman cumhurbaşkanı olmuştur?", ['19 Mayıs 1923', '29 Ekim 1920', '29 Ekim 1923'], '29 Ekim 1923');
var question10 = new Question("Atatürk toplam kaç tane savaşa katılmıştır?", ['9', '10', '11'], '10');

var musicQues = [
    question1.question,
    question2.question,
    question3.question,
    question4.question,
    question5.question,
    question6.question,
    question7.question,
    question8.question,
    question9.question,
    question10.question
]

var correctAns = []

// Start Game after play button is clicked
$('#playBtn').on('click', function() {
    startTimer()
    setCurrentQuestion()
    $('#intro').toggle()
    $('#topInfo').attr('style', 'display: flex')
    $('#quizBox').fadeIn(500, 'swing', function() {
        // Add question and answer text to the page
        $('.question').text(randomQ)
    })
})

// Randomize Questions
var randomQ = musicQues[Math.floor(Math.random() * musicQues.length)];

// Variable Set up
var answerBtn = $('.answerBtn')
var questionNum = $('.questionNum')
var nextBtn = $('#nextBtn')
var seconds = 19;

var correct = null
var current = null
var currentAns = null

// Function after button is clicked
var guess = function() {
    var txt = $(this).text();
    if (txt === correct) {
        $(this).addClass('correct');
        correctAns.push(current);
    } else {
        $(this).addClass('incorrect');
        for (var i = 0; answerBtn.length > i; i++) {
            var button = answerBtn.eq(i);
            if (button.text() === correct) {
                button.addClass('correct');
            }
        }
    }
    // Toggle display of next button if answer is clicked
    nextBtn.attr('style', 'display: block');
}
// Activate function when any answer is clicked
answerBtn.on('click', guess);

// Function for when the 'next' button is clicked
var nextQuestion = function() {
    // Reshuffle questions displayed
    randomQ = musicQues[Math.floor(Math.random() * musicQues.length)]
    // Reactivate switch case
    setCurrentQuestion()
    seconds = 20;
    console.log(randomQ)
    // Remove green/red backgrounds from buttons
    answerBtn.removeClass('correct incorrect')

    $('.question').text(randomQ)

    // remove current index and log array into console to see if it worked
    musicQues.splice(musicQues.indexOf(randomQ), 1)

    // Toggle display of next button if answer is clicked
    nextBtn.toggle();

    // Add correctAns length to score
    $('.score p').text(correctAns.length)

    // If Question Array is empty
    if (musicQues.length === 0) {
        $('#quizBox').toggle();
        $('#scoreBox').attr('style', 'display: flex').text(correctAns.length);
        $('#playAgain').attr('style', 'display: block').on('click', function() {
            window.location.reload()
        })
        clearInterval(timerId);
    }
}

// Timer
var timerId

var startTimer = function() {
    timerId = setInterval(updateTime, 1000);
}

var updateTime = function() {
    $('.timer p').text(seconds)
    seconds--
    if (seconds === 0) {
        nextQuestion();
    }
}

// Next question click event
nextBtn.on('click', nextQuestion);

// Set current question after randomize
var setCurrentQuestion = function() {
    switch (randomQ) {
        // Question 1
        case question1.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question1.choices[i]);
            })
            correct = question1.answer;
            // Store current question, answers, and correct answers
            current = question1;
            currentAns = question1.choices;
            break;

        // Question 2
        case question2.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question2.choices[i]);
            })
            correct = question2.answer;
            // Store current question, answers, and correct answers
            current = question2;
            currentAns = question2.choices;
            break;

        // Question 3
        case question3.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question3.choices[i]);
            })
            correct = question3.answer;
            // Store current question, answers, and correct answers
            current = question3;
            currentAns = question3.choices;
            break;

        // Question 4
        case question4.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question4.choices[i]);
            })
            correct = question4.answer;
            // Store current question, answers, and correct answers
            current = question4;
            currentAns = question4.choices;
            break;

        // Question 5
        case question5.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question5.choices[i]);
            })
            correct = question5.answer;
            // Store current question, answers, and correct answers
            current = question5;
            currentAns = question5.choices;
            break;

        // Question 6
        case question6.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question6.choices[i]);
            })
            correct = question6.answer;
            // Store current question, answers, and correct answers
            current = question6;
            currentAns = question6.choices;
            break;

        // Question 7
        case question7.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question7.choices[i]);
            })
            correct = question7.answer;
            // Store current question, answers, and correct answers
            current = question7;
            currentAns = question7.choices;
            break;

        // Question 8
        case question8.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question8.choices[i]);
            })
            correct = question8.answer;
            // Store current question, answers, and correct answers
            current = question8;
            currentAns = question8.choices;
            break;

        // Question 8
        case question8.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question8.choices[i]);
            })
            correct = question8.answer;
            // Store current question, answers, and correct answers
            current = question8;
            currentAns = question8.choices;
            break;

        // Question 9
        case question9.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question9.choices[i]);
            })
            correct = question9.answer;
            // Store current question, answers, and correct answers
            current = question9;
            currentAns = question9.choices;
            break;

        // Question 10
        case question10.question:
            musicQues.forEach(function(question, i) {
                answerBtn.eq(i).text(question10.choices[i]);
            })
            correct = question10.answer;
            // Store current question, answers, and correct answers
            current = question10;
            currentAns = question10.choices;
            break;
        default:
            console.log('switch/case not working')
    }
}
