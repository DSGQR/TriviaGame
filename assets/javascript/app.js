let questions = [ 
    {
        id: 0,
        question: 'What percentage of all photos in the world have been taken in the past 12 months.',
        choices: ['40%', '15%', '10%', '25%'],
        correct: '10%',
    },
    {
        id: 1,
        question: 'Over 7000 US citizens die and 1.5 million impair their health due to __________.',
        choices: ['Routine Vaccines', 'Poor Healthcare Customer Service', 'Illegible Doctors Writing', 'Inconsiderate Patient Staff'],
        correct: 'Illegible Doctors Writing',
    },
    {
        id: 2,
        question: 'Most diamonds are at least 3 _______ years old.',
        choices: ['Hundred', 'Billion', 'Million', 'Thousand'],
        correct: 'Billion',
    },
    {
        id: 3,
        question: 'Every 10th European child has been conceived in a(n) ______ bed.',
        choices: ['Sklar', 'Macys', 'Walmart', 'IKEA'],
        correct: 'IKEA',
    },
    {
        id: 4,
        question: 'Heroin was initially advertised as a cure for _______.',
        choices: ['Coughs', 'The Common Cold', 'Malaria', 'STDs'],
        correct: 'Coughs',
    },
    {
        id: 5,
        question: 'What Percentage of mankind dont live to see their first birthday?',
        choices: ['10%', '20%', '30%', '40%'],
        correct: '40%',
    },
    {
        id: 6,
        question: 'Moon dust smells of ________.',
        choices: ['Tar', 'Gunpowder', 'Resin', 'Thermal Paste'],
        correct: 'Gunpowder',
    },
    {
        id: 7,
        question: 'How many teeth does a bear have?',
        choices: ['50', '48', '42', '38'],
        correct: '42',
    },
    {
        id: 8,
        question: 'What month has the highest percentage of births?',
        choices: ['August', 'February', 'December', 'June'],
        correct: 'August',
    },
    {
        id: 9,
        question: 'When lightning strikes it can reach up to ________ degrees fahrenheit.',
        choices: ['30,000', '25,000', '60,000', '54,000'],
        correct: '54,000',
    },
]

questions.forEach(question => {
    $('.container').append(`
    <div class="row">
        <h5 class="question">${question.question}</h5>
            <p>
            <label>
                <input class="choice" data-choice="${question.choices[0]}" name="question-${question.id}" type="radio" />
                <span>${question.choices[0]}</span>
            </label>
            </p>
            <p>
            <label>
                <input class="choice" data-choice="${question.choices[1]}" name="question-${question.id}" type="radio" />
                <span>${question.choices[1]}</span>
            </label>
            </p>
            <p>
            <label>
                <input class="choice" data-choice="${question.choices[2]}" name="question-${question.id}" type="radio" />
                <span>${question.choices[2]}</span>
            </label>
            </p>
            <p>
            <label>
                <input class="choice" data-choice="${question.choices[3]}" name="question-${question.id}" type="radio" />
                <span>${question.choices[3]}</span>
            </label>
            </p>
        <p class="answer-${question.id}" style="visibility: hidden">${question.correct}</p>
    </div>
    `)
})

var qChoice0
var qChoice1
var qChoice2
var qChoice3
var qChoice4
var qChoice5
var qChoice6
var qChoice7
var qChoice8
var qChoice9

$(document).on('click', '.choice', function () {
    let temp = $(this).attr('name').split('-')
    let qId = temp[1]
    window[`qChoice${qId}`] = $(this).attr('data-choice')
})

$('.finishQuiz').on('click', function () {
    finishGame()
})

function finishGame () {
    clearInterval(gameTimer)
    count = 0
    for (let i = 0; i < questions.length; i++) {
            $(`.answer-${i}`).css('visibility', 'visible')
        if (window[`qChoice${i}`] === questions[i].correct) {
            count++
        }
    }
    if (count === 10) {
        alert('You Got Them All Right! Well Done.')
    } else {
        alert('Better Luck Next Time.')
    }
}

    function timeConversion (t) {
        var minutes = Math.floor(t / 60)
        var seconds = t - (minutes * 60)
    
        if (seconds < 10) {
          seconds = '0' + seconds
        }
    
        if (minutes === 0) {
          minutes = '00'
        } else if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        return minutes + ':' + seconds
      }

    let time = 120
    $('.time').html('02:00')

    let gameTimer = setInterval(function () {
        time--
        if (time > 0) {
        $('.time').html(timeConversion(time))
        } else {
        $('.time').html('00:00')
        finishGame()
        }
    }, 1000)
