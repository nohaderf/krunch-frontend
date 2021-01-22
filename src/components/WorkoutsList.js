import React from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutsList({allWorkouts}){

    const workoutsObj = allWorkouts.map(workout => {
        return <WorkoutCard
                    workout = {workout}
                    key = {workout.id}
            />
    })


    return (
        <div className="workouts-list">
            <h1>All Workouts </h1>
            {/* <Search /> */}
            <p>{workoutsObj}</p>
        </div>
        
    )
}

export default WorkoutsList;