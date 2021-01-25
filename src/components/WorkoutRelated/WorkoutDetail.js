import React, { useEffect, useState} from "react"
import {Link, useParams, useHistory} from "react-router-dom"

function WorkoutDetail({addExercise}){
    const [workout, setWorkout] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();
    const history = useHistory()
    
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
                return <><li key={exercise.id}> 
                            <Link to={`/exercises/${exercise.id}`}>
                             {exercise.exercise}
                            </Link>
                        </li>
                        <button dataset-id={exercise.id}>Delete</button>
                        </>})}
        else {return <p>You should add some exercises to this workout!</p>}
    }

    // function handleClick(){
    //     addExercise(workout.id)

    // }



    function handleDelete(){
        fetch(`http://localhost:3000/workouts/${params.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(console.log(history.push(`/workouts`)))
        // we want this to rerender
    }

    

    return(<>
        <h1> {name.toUpperCase()} on {date}</h1>
        <h2>You did the following workouts:</h2>
        <ul>{exerciseObj()}</ul>
        <p>Notes on the day: {notes}</p>
        <br></br>
        <br></br>
        <br></br>
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
        <button onClick={handleDelete}>Delete this Workout</button>
        </>
    )
    


}


export default WorkoutDetail