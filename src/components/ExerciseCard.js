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
             { isFront ? <div className="content">
                <figure><img className="image-ex" src={example} alt={exercise}/> </figure>
                <strong><p className="name">{exercise}</p></strong>
                <span className="type">{exerciseType}</span>
            </div> : <div className="back-content">
                <p className="equipment">Equiment: {equipment}</p>
                <p className="major-muscle">Major Muscle: {majorMuscle}</p>
                <p className="minorMuscle">Minor Muscle: {minorMuscle}</p>
                <p className="notes">Tips: {notes}</p>
                <p className="modifications">Modifications: {modifications}</p>
            </div>  }
        </div>

        
    )
}

export default ExerciseCard;
