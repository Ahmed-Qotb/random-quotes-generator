

var quteArr = [
    '“Be yourself; everyone else is already taken.” - Oscar Wilde'
    ,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” 
    ― Marilyn Monroe`
    ,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`
    ,
    `“So many books, so little time.”
    ― Frank Zappa`
    ,
    `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`
];

function randGen() {
    
    var randNumber = Math.floor(Math.random() * (quteArr.length));
    if (prevQoute == randNumber) {
        randGen()
    } else {
        document.getElementById('randomQuote').innerHTML = quteArr[randNumber];
        console.log(randNumber);
        var prevQoute = randNumber;
    }
    

}

