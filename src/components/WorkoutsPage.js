import React, {useState, useEffect} from "react"
import WorkoutsList from "./WorkoutsList"

function WorkoutsPage(){

    const [allWorkouts, setAllWorkouts] = useState([])

  
    useEffect(() => {
        fetch(`http://localhost:3000/workouts`)
        .then(r => r.json())
        .then(setAllWorkouts)
    }, [])





    return (
        <div className="workouts-page">
            <h1>Workouts Page</h1>
            {/* <Search /> */}
            <WorkoutsList allWorkouts={allWorkouts}/>
        </div>
        
    )
}

export default WorkoutsPage;