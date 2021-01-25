import React from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutsList({allWorkouts, onDelete}){

    const workoutsObj = allWorkouts.map(workout => {
        return <WorkoutCard
                    workout = {workout}
                    key = {workout.id}
                    onDeleteClick = {onDelete}
            />
    })

    return (
        <div className="workouts-list">
            <h1>Your Workouts </h1>
            <p>{workoutsObj}</p>
        </div>
        
    )
}

export default WorkoutsList;