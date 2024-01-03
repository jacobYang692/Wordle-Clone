
import Letter from "./Letter";


function Attempt({ className, word, selectedWord, submitted, attempts, attempt }) {

    const correctWord = selectedWord.toUpperCase().split('')
    
    const letters = word.toUpperCase().split('');

    if(submitted) {
        return (
            <div className="input-attempt">
                <div className="input-letter-box"><Letter letter={letters[0]} correctWord={correctWord} index={0}></Letter></div>
                <div className="input-letter-box"><Letter letter={letters[1]} correctWord={correctWord} index={1}></Letter></div>
                <div className="input-letter-box"><Letter letter={letters[2]} correctWord={correctWord} index={2}></Letter></div>
                <div className="input-letter-box"><Letter letter={letters[3]} correctWord={correctWord} index={3}></Letter></div>
                <div className="input-letter-box"><Letter letter={letters[4]} correctWord={correctWord} index={4}></Letter></div>
            </div>
        )   
    }
    else if(className === 'active') {
        return (
            <div className="input-attempt">
                    
                    <div className="input-letter-box">{letters[0]}</div>
                    <div className="input-letter-box">{letters[1]}</div>
                    <div className="input-letter-box">{letters[2]}</div>
                    <div className="input-letter-box">{letters[3]}</div>
                    <div className="input-letter-box">{letters[4]}</div>
            </div>
        )
    }
    else {
        return (
            <div className="input-attempt">
                    <div className="input-letter-box"></div>
                    <div className="input-letter-box"></div>
                    <div className="input-letter-box"></div>
                    <div className="input-letter-box"></div>
                    <div className="input-letter-box"></div>
            </div>
        )
    }
    
    
}
export default Attempt;