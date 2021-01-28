import React from "react"
import ChartReps from "./ChartReps"
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
        <>
        <div className="workout-obj-parent">{workoutsObj}</div>
        <div><br></br><br></br></div>
        <div className="reps-data">
            <ChartReps/>
        </div>
        </>    
    )
}

export default WorkoutsList;