import React from "react"
import ExerciseList from "./ExerciseList"

function ExercisePage(){
    return (
        <div className="exercise-page">
            <h1>Exercise Page</h1>
            {/* <Search /> */}
            <ExerciseList />
        </div>
        
    )
}

export default ExercisePage;