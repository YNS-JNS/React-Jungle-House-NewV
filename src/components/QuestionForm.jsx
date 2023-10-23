import { useState } from 'react'

function QuestionForm() {
    // _____________________________________________________________________________
    const [inputValue, setInputValue] = useState('Posez votre question ici');
    // _____________________________________________________________________________
    const checkValue = (value) => {
        if (!value.includes('f')) {
            setInputValue(value);
        }
    }
    // _____________________________________________________________________________

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            
        </div>
    )
}

export default QuestionForm