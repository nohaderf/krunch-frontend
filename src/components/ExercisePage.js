import React from "react"
import ExerciseList from "./ExerciseList"

function ExercisePage({ exercises }){

    const exerciseList = exercises.map(exercise => {
        return <ExerciseList key={exercise.id} exercise={exercise} />
    })
    return (
        <div className="exercise-page">
            <h1>Exercise Page</h1>
            {/* <Search /> */}
            {exerciseList}
        </div>
        
    )
}

export default ExercisePage;