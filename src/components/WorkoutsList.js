import React from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutsList(){
    return (
        <div className="workouts-list">
            <h1>Workouts List</h1>
            {/* <Search /> */}
            <WorkoutCard />
        </div>
        
    )
}

export default WorkoutsList;