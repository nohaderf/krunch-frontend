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
         <div className="add-new-workout-div">
             <Link to={`/workouts/new`}>
                <div className="add-new-workout-button">
                    <div id="translate"></div>
                    <a href="#"><strong>ADD NEW WORKOUT</strong></a>
                </div>
            </Link>
        </div>
         <div className="workout-div">
            <div className="workout">
                <WorkoutsList allWorkouts={filterWorkouts} />
            </div>
        </div>
        </>
    )
}

export default WorkoutsPage;