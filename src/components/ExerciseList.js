import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseList({ exercise }){

    return (
        <div className="exercise-list">
            <ExerciseCard oneExercise={exercise} />
        </div>
        
    )
}

export default ExerciseList;