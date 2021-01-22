import React from "react"
import {Link} from "react-router-dom"

function WorkoutCard({workout}){
    const {date, notes, name, exercises} = workout
    console.log(exercises)
    
    
    const exerciseObj = () => {
        if (exercises[0]) {
            return exercises.map(exercise => { 
            <li>{exercise.exercise}</li>})}
        else {return <p>Add some exercise to this workout!</p>}
        }

    return (
        <div className="workouts-card">
            <h1>{name}</h1>
            <ul>{exerciseObj()}</ul>
            
        </div>
        
    )
}

export default WorkoutCard;