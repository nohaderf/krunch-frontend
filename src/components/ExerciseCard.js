import React from "react"

function ExerciseCard({ oneExercise }){
    const { exercise, equipment, exerciseType, majorMuscle, minorMuscle, example, notes, modifications } = oneExercise
    
    return (
        <div className="exercise-card">
            <h1>{exercise}</h1>
        </div>
        
    )
}

export default ExerciseCard;
