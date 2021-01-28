import React from "react"
import {Link} from "react-router-dom"
// import { Route, useRouteMatch } from "react-router-dom";


function WorkoutCard({workout}){
    const {date, name, exercises, id, notes} = workout
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
        // <div className="workouts-card">
        //     <h2>
        //         <Link to={`/workouts/${id}`}>{name}</Link> 
        //     </h2>   
            
        //     <h3>
        //          {date}
        //     </h3>
        // </div>
        <div class="workout-list-card">
            <div class="pics_card" >
                <div class="txt_titre_card"><Link to={`/workouts/${id}`}>{name} on {(date).slice(6,10)}</Link></div>
                </div>
            <div class="txt_desciption_card">{notes}</div>
            {/* <div align="left" >
                <div class="tool_link" >Share</div><div class="read tool_link" >Read</div>
            </div> */}
        </div>
        
    )
}

export default WorkoutCard;