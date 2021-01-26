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
            <p>{workoutsObj}</p>
        </div>
        
    )
}

export default WorkoutsList;