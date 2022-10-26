import Star from '../assets/logo/Star.png'

export default function CareScale({ scaleValue, careType }) {
    const difficultyLevel = {
        1: 'Débutant',
        2: 'Averti',
        3: 'Confirmé',
        4: 'Chevronné',
        5: 'Expert'
    }
    
    const range = [1, 2, 3, 4, 5]
    const scaleType = <img src={Star} alt="star-icon" height="20px"></img>

    return (
        <div
            onClick={() =>
                alert(`Cette formation requiert un niveau ${difficultyLevel[scaleValue]}
             ${careType === "difficulty"} `)}
        >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span>) : null
            )}
        </div>
    )
}