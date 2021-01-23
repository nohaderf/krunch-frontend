import React from "react"
import ExerciseCard from "./ExerciseCard"

function ExerciseList({ exercises }){

    const exerciseCard = exercises.map(exercise => {
        return <ExerciseCard key={exercise.id} oneExercise={exercise} />
    })

    return (
        <ul className="cards">{exerciseCard}</ul>
      );
}

export default ExerciseList;