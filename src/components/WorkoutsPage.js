import React from "react"
import WorkoutsList from "./WorkoutsList"

function WorkoutsPage(){
    return (
        <div className="workouts-page">
            <h1>Workouts Page</h1>
            {/* <Search /> */}
            <WorkoutsList />
        </div>
        
    )
}

export default WorkoutsPage;