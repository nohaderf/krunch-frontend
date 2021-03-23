import React, { useState } from "react";
import {useHistory} from "react-router-dom"


function ExerciseCard({ oneExercise, wktID }){
    const { id, exercise, equipment, exerciseType, majorMuscle, minorMuscle, example, notes, modifications } = oneExercise
    const [isFront, setIsFront] = useState(true)
    const history = useHistory()
    const [repInput, setRepInput] = useState(0)

    function handleSpritesToggle(){
        setIsFront(!isFront)
    }

    function handleClick(){
        fetch(`https://krunch-app.herokuapp.com/workout_exercises`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workout_id: wktID,
                exercise_id: id,
                reps: repInput
            }),
          })
          .then(response => response.json())
          .then(data => {
            history.push(`/workouts/${wktID}`);
          })
    }

    return (
        <div className="exercise-card" >
             { isFront ? <div className="front-content" onClick={handleSpritesToggle}>
                <div className="image-div"><img className="image-ex" src={example} alt={exercise}/></div>
                <p className="name">{exercise}</p>
                <span className="category">Category: {exerciseType}    |   <i class="fas fa-info-circle"></i> more info</span>
            </div> : <div className="back-content">
                <p><span className="back-topic">Equipment:</span> {equipment}</p>
                <p><span className="back-topic">Major Muscle:</span> {majorMuscle}</p>
                { minorMuscle ? <p><span className="back-topic">Minor Muscle:</span> {minorMuscle}</p> : null}
                { notes ? <p><span className="back-topic">Tips:</span> {notes}</p> : "" }
                { modifications ? <p><span className="back-topic">Modifications:</span> {modifications}</p> : "" }
                {wktID? <><label>Enter Number of Reps</label> <input type="text" value={repInput} onChange={(event) => setRepInput(event.target.value)}></input></> : null}
                {wktID? <button onClick={handleClick}>Add to workout</button> : null}
                <p onClick={handleSpritesToggle}><p className="go-back"><i class="fas fa-undo"></i> GO BACK</p></p>
            </div>  }    
        </div>

        
    )
}

export default ExerciseCard;
