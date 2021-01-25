import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseList({ exercises, wktID }){

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