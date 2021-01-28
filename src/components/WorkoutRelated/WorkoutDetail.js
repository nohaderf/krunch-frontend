import React, { useEffect, useState } from "react"
import {Link, useParams, useHistory } from "react-router-dom"
import ScrollToTop from "../ScrollToTop";
import ChartReps from "./ChartReps";
import WorkoutDetailCards from "./WorkoutDetailCards";

function WorkoutDetail({ onDeleteClick }){
    const [workout, setWorkout] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();
    const history = useHistory();
    const [allExercises, setAllExercises] = useState([])

       
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setWorkout(data)
            // console.log(data)
            setAllExercises(data.exercises)
            setIsLoaded(true)
        })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;
    
    const {date, notes, name, exercises, WorkoutExercises, id} = workout

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

    function handleExerciseRemove(removedWorkoutExerciseID, exerciseID){
        console.log(removedWorkoutExerciseID)
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workout_exercises/${removedWorkoutExerciseID}`,{
            method: "DELETE"
        })
       
        const filteredExercises = allExercises.filter(exercise => exercise.id !== exerciseID)
        setAllExercises(filteredExercises) 
        console.log(filteredExercises)
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
              
                <button onClick={handleDeleteWorkout}>Delete</button>
                            
                <Link to={`/workouts`}>
                                <button>Back to Workouts</button>
                            </Link>        
            </div>

            <div className="right-workout-div">
                <WorkoutDetailCards key={workout.id} workout={workout} exercises={allExercises} handleExerciseRemove={handleExerciseRemove}/>
            </div>                 
        </div>

        <div className="reps-data">
            <ChartReps />
        </div>
        <ScrollToTop />
        </>
    )
  
}


export default WorkoutDetail