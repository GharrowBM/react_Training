import {useState} from 'react'

export default function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question')
    
    return(
        <>
            <textarea cols="30" rows="10" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            
            ></textarea>
        </>
    )
}