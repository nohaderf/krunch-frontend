import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ExerciseCard({ oneExercise }){
    const { exercise, equipment, exerciseType, majorMuscle, minorMuscle, example, notes, modifications } = oneExercise
    const [isFront, setIsFront] = useState(true)

    function handleSpritesToggle(){
        setIsFront(!isFront)
      }
    
    return (
            <div className="exercise-card" onClick={handleSpritesToggle}>
             { isFront ? <div className="front-content">
                <img className="image-ex" src={example} alt={exercise}/>
                <p className="name">{exercise}</p>
                <span className="type">Category: {exerciseType}</span>
            </div> : <div className="back-content">
                <p><span className="back-topic">Equiment:</span> {equipment}</p>
                <p><span className="back-topic">Major Muscle:</span> {majorMuscle}</p>
                <p><span className="back-topic">Minor Muscle:</span> {minorMuscle}</p>
                <p><span className="back-topic">Tips:</span> {notes}</p>
                <p><span className="back-topic">Modifications:</span> {modifications}</p>
            </div>  }
        </div>

        
    )
}

export default ExerciseCard;
