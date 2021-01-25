import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseList({ exercises, wktID }){

    if (exercises.length <= 0 ){
        return (
            <div className="error">
            <h1>Sorry, we couldn't find results.</h1>
            <h2>Please make sure you entered the correct search term and try again.</h2>
            </div>
        )
    }

    const exerciseCard = exercises.map(exercise => {
        return <ExerciseCard 
                    key={exercise.id} 
                    oneExercise={exercise} 
                    wktID = {wktID}
                />
    })

    return (
        <ul className="cards">{exerciseCard}</ul>
      );
}

export default ExerciseList;