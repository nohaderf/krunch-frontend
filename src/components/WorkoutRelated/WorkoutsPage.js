import React, { useState } from "react"
import {Link} from "react-router-dom"
import WorkoutsList from "./WorkoutsList"
import Search from "../Search"
import ChartReps from "./ChartReps"

function WorkoutsPage({ allWorkouts }){
    const [search, setSearch] = useState("")

    const filterWorkouts = allWorkouts.filter(workout => {
        return workout.name.toLowerCase().includes(search.toLowerCase())
    })

    // const workoutDates = filterWorkouts.map(workout => workout.date)
    
    // const sortedDates = [...workoutDates].sort((date1, date2) => {
    //     date1 = date1.split('-').join('')
    //     date2 = date2.split('-').join('')
    //     return date1.localeCompare(date2)
    // })

    // console.log(sortedDates)

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