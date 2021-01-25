import React, { useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

function ExerciseDetail(){
    const [selectedExercise, setExercise] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/exercises/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setExercise(data)
            setIsLoaded(true)
        })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;
    
    const {exercise, equipment, exerciseType, majorMuscle, example} = selectedExercise

    return(
        <>
        <h1> Exercise Detail </h1>
        <h1>{exercise}</h1>
        <p>You will need {equipment}</p>
        <p>Type of Exercise: {exerciseType}</p>
        <br></br>
        <img src={example} alt={exercise}></img>
        </>
    )
 }

export default ExerciseDetail