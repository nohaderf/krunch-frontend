import React, { useState } from "react"
import ExerciseList from "./ExerciseList"
import Search from "../Search"
import { useHistory} from "react-router-dom"

function ExercisePage({ exercises }){
    const [search, setSearch] = useState("")
    const history = useHistory()
    let wktID 
    if (!history.location.state){
        wktID =false}
    else {wktID = history.location.state.workout.id;}

    


    // console.log(addExercise)

    const filterExercises = exercises.filter(oneExercise => {
        return oneExercise.exercise.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="exercise-page">
            <h1 className="exercise-header">&nbsp;EXERCISES</h1>
            <div className="search-bar">
                <Search search={search} onSearchChange={setSearch}/>
            </div>
            <div className="exercise-list">
                <ExerciseList exercises={filterExercises} wktID={wktID}/>
            </div>
                
        </div>
        
    )
}

export default ExercisePage;