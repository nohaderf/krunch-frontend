import React, { useState } from "react";
import {useHistory} from "react-router-dom"


function ExerciseCard({ oneExercise, wktID }){
    const { id, exercise, equipment, exerciseType, majorMuscle, minorMuscle, example, notes, modifications } = oneExercise
    const [isFront, setIsFront] = useState(true)
    const history = useHistory()

    function handleSpritesToggle(){
        setIsFront(!isFront)
    }

    function handleClick(){
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workout_exercises`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workout_id: wktID,
                exercise_id: id
            }),
          })
          .then(response => response.json())
          .then(data => {
            history.push(`/workouts/${wktID}`);
          })
    }

    return (
            <div className="exercise-card" onClick={handleSpritesToggle}>
             { isFront ? <div className="front-content">
                <div className="image-div"><img className="image-ex" src={example} alt={exercise}/></div>
                <p className="name">{exercise}</p>
                <span className="type">Category: {exerciseType}</span>
            </div> : <div className="back-content">
                <p><span className="back-topic">Equiment:</span> {equipment}</p>
                <p><span className="back-topic">Major Muscle:</span> {majorMuscle}</p>
                <p><span className="back-topic">Minor Muscle:</span> {minorMuscle}</p>
                { notes ? <p><span className="back-topic">Tips:</span> {notes}</p> : "" }
                { modifications ? <p><span className="back-topic">Modifications:</span> {modifications}</p> : "" }
                {wktID? <button onClick={handleClick}>Add to workout</button> : null}
            </div>  }
        </div>

        
    )
}

export default ExerciseCard;
