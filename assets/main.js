// grabs the answer your question button in html
var btn = $('button')

// is wating for button to be clicked for function display answers to start
 btn.click(displayAnswers)

// difines function display answers
function displayAnswers(){
   var i = Math.floor(Math.random() * responses.length);

   var pEl = $('p')

   pEl.text(responses[i])
}

var responses = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Dont count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
]
