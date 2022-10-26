import CareScale from './CareScale'
import '../styles/FormationCard.css'


function handleClick(lesson){
    console.log(lesson.name);
    alert(`Ceci est un click sur : ${lesson.name}`);
}

function FormationCard(lesson, index) {
    return (
        <div className="card" key={index} onClick={()=>handleClick(lesson)}>
            <div className="card-title">
                {lesson.name}
            </div>
            <div>
                <img src={lesson.logo} alt={`${lesson.name} logo`} className="img" />
            </div>
            <div className="category">
                <span className="cat-label">Catégorie : </span>
                {lesson.category}
            </div>
            <div className="difficulty">
                <span className="dif-label">Difficulté : </span>
                <CareScale scaleValue={lesson.difficulty} careType="difficulty" className="stars" />
            </div>
            <div className="price">
                {lesson.price}€
            </div>
        </div>
        
    )
}

export default FormationCard