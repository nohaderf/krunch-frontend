import React from "react"
import WorkoutsCard from "./WorkoutsCard"

function WorkoutsList(){
    return (
        <div className="workouts-list">
            <h1>Workouts List</h1>
            {/* <Search /> */}
            <WorkoutsCard />
        </div>
        
    )
}

export default WorkoutsList;