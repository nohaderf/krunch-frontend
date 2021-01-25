import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ExerciseCard({ oneExercise, wktID }){
    const { id, exercise, equipment, exerciseType, majorMuscle, minorMuscle, example, notes, modifications } = oneExercise
    const [isFront, setIsFront] = useState(true)

console.log(wktID)



    function handleSpritesToggle(){
        setIsFront(!isFront)
      }



    function handleClick(){
        // console.log("workoutID", typeof(wktID))
        // console.log("exer id", typeof(id))

        // const data = {workout_id: wktID, exercise_id: id}


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
            console.log('data:', data);
          })

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
                {wktID? <button onClick={handleClick}>Add to workout</button> : null}
            </div>  }
        </div>

        
    )
}

export default ExerciseCard;
