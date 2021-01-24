import React, { useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

function WorkoutDetail(){
    const [workout, setWorkout] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();

    console.log(params)
    
    
    useEffect(() => {
        fetch(`http://localhost:3000/workouts/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setWorkout(data)
            setIsLoaded(true)
        })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;
    
    const {date, notes, name, exercises} = workout


    console.log(workout)

    const exerciseObj = () => {
        if (exercises[0]) {
            return exercises.map(exercise => {
                return <li> 
                            <Link to={`/exercises/${exercise.id}`}>
                             {exercise.exercise}
                            </Link>
                        </li>})}
        else {return <p>Add some exercise to this workout!</p>}
    }

    

    return(<>
        <h1> {name.toUpperCase()} on {date}</h1>
        <h2>{date}</h2>
        <ul>{exerciseObj()}</ul>
        <p>Notes on the day: {notes}</p>
        </>
    )
    


}


export default WorkoutDetail