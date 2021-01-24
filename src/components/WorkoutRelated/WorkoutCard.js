import React from "react"
import {Link} from "react-router-dom"
import { Route, useRouteMatch } from "react-router-dom";


function WorkoutCard({workout}){
    const {date, notes, name, exercises, id} = workout
    // console.log(id)
    
    
    const exerciseObj = () => {
        if (exercises[0]) {
            return exercises.map(exercise => {
                return <li key={exercise.id}>
                            {exercise.exercise}
                        </li>})}
        else {return <p>Add some exercise to this workout!</p>}
    }

    return (
        <div className="workouts-card">
            <h2>
                <Link to={`/workouts/${id}`}>{name}</Link> on {date}
            </h2>
            <ul>{exerciseObj()}</ul>
            
        </div>
        
    )
}

export default WorkoutCard;