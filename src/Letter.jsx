

function Letter({letter, correctWord, index}) {


    if(letter === correctWord[index]) {
        return (
            <div className="correct-letter inputted-letter">
                {letter}
            </div>
        )
    }
    else if(letter !== correctWord[index] && correctWord.includes(letter)) {
         
        return (
            <div className="letter-in-word inputted-letter">
                {letter}
            </div>
        )
    }
    return (
        <div className="letter-not-in inputted-letter">
            {letter}
        </div>
    )
    
}
export default Letter;