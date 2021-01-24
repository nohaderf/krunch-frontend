import React, {useState, useEffect} from "react"
import WorkoutsList from "./WorkoutsList"
import Search from "../Search"


function WorkoutsPage(){
    const [search, setSearch] = useState("")


    const [allWorkouts, setAllWorkouts] = useState([])

  
    // console.log(process.env.REACT_APP_API_BASE_URL)
    useEffect(() => {
        fetch(`http://localhost:3000/workouts`)
        .then(r => r.json())
        .then(setAllWorkouts)
    }, [])


    const filterWorkouts = allWorkouts.filter(workout => {
        return workout.name.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <div className="workouts-page">
            <h1 className="exercise-header">&nbsp;WORKOUTS</h1>
            <div className="search-bar">
                <Search search={search} onSearchChange={setSearch}/>
            </div>
            {/* <h1>Workouts Page</h1> */}
            <WorkoutsList allWorkouts={filterWorkouts}/>
        </div>
        
    )
}

export default WorkoutsPage;