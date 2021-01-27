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

                return <><div className="wkt-exercise-detail-div" key={exercise.id}> 
                             {exercise.exercise}
                            <br></br>
                            <Link to={`/exercises/${exercise.id}`}>
                                <img src={exercise.example} width="100" height="100"></img>
                            </Link>
                            <br></br>
                            <button 
                                data-id={exercise.id}
                                onClick={handleDeleteExercise}
                                >Delete
                            </button>
                        </div>
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
        <>
        <div className="workout-div">
            <div className="left-workout-div">
                <h1> {name.toUpperCase()} on {date}</h1>
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
            </div>

            <div className="right-workout-div">
                {exercises[0] ? <h2>You did the following workouts:</h2> : <h2>You should</h2>}
                <div className = "workout-detail-exercise-images">{exerciseObj()}</div>
            </div>                 
        </div>
    
            <div className="workout-delete-button">                
                <button onClick={handleDeleteWorkout}>Delete this Workout</button>
            </div>            
        </>
    )
  
}


export default WorkoutDetail