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
            <WorkoutsList allWorkouts={filterWorkouts} />
            
        </div>
        </>
    )
}

export default WorkoutsPage;