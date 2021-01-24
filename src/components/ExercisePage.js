import React, { useState } from "react"
import ExerciseList from "./ExerciseList"
import Search from "./Search"

function ExercisePage({ exercises }){
    const [search, setSearch] = useState("")

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
                <ExerciseList exercises={filterExercises} />
            </div>
                
        </div>
        
    )
}

export default ExercisePage;