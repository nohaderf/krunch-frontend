import React, { useState } from "react"
import {Link} from "react-router-dom"
import WorkoutsList from "./WorkoutsList"
import Search from "../Search"


function WorkoutsPage({ allWorkouts }){
    const [search, setSearch] = useState("")

    const filterWorkouts = allWorkouts.filter(workout => {
        return workout.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <>
        <div className="page-div">
            <h1 className="page-header">&nbsp;Your Workouts</h1>
            <div className="search-bar">
                <Search search={search} onSearchChange={setSearch}/>
            </div>
         </div>
         <div className="workout-div">
            <div className="workout">
                <WorkoutsList allWorkouts={filterWorkouts} />
            </div>
            <p><Link to={`/workouts/new`}>
                <button><strong>ADD NEW WORKOUT</strong></button>
            </Link></p>
        </div>
        </>
    )
}

export default WorkoutsPage;