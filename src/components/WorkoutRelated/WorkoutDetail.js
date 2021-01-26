import React, { useEffect, useState } from "react"
import {Link, useParams, useHistory } from "react-router-dom"

function WorkoutDetail({ onDeleteClick }){
    const [workout, setWorkout] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();
    const history = useHistory();

    // console.log(params)
    
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setWorkout(data)
            setIsLoaded(true)
        })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;
    
    const {date, notes, name, exercises} = workout
    const exerciseObj = () => {
        if (exercises[0]) {
            return exercises.map(exercise => {
                console.log(workout)

                return <><li key={exercise.id}> 
                            <Link to={`/exercises/${exercise.id}`}>
                             {exercise.exercise}
                            </Link>
                        </li>
                        <button 
                            data-id={exercise.id}
                            onClick={handleDeleteExercise}
                            >Delete
                            </button>
                        </>})}
        else {return <p>You should add some exercises to this workout!</p>}
    }

    function handleDeleteExercise(e){
       console.log(e.target.dataset.id)
        // fetch(`${process.env.REACT_APP_API_BASE_URL}/exercises/${id}`,{
        //     method: "DELETE"
        // })
        // .then(resp=> resp.json())
        // .then(console.log)

    }

    function handleDeleteWorkout(){
        onDeleteClick(workout)
        fetch(`http://localhost:3000/workouts/${params.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            history.push(`/workouts`)
        })
    }


    return(
        <div className="workout-div">
            <h1> {name.toUpperCase()} on {date}</h1>
            <h2>You did the following workouts:</h2>
            <ul>{exerciseObj()}</ul>
            <p>Notes on the day: {notes}</p>
            <br></br>
            <button>
                <Link to={{
                        pathname:`/exercises`,
                        state: {workout}
                    
                        }}>
                        Add Exercises 
                    </Link>            
            </button>

            <button>
                <Link to={{
                    pathname:`/workouts/${params.id}/edit`,
                    state: {workout}
                    }}>
                    Edit 
                </Link>
            </button>
            <button onClick={handleDeleteWorkout}>Delete this Workout</button>
        </div>
    )
    


}


export default WorkoutDetail