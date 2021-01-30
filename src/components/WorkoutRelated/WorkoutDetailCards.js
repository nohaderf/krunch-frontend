import React from 'react'

function WorkoutDetailCards({workout, handleExerciseRemove, exercises}){
    const {date, notes, name, WorkoutExercises, id} = workout

    const exerciseObj = () => {
        if (exercises[0]) {
            return exercises.map(exercise => {
                return (
                    <>
                        <div className="wkt-exercise-detail-div" key={exercise.id}> 
                            {exercise.exercise}
                            <br></br>

                            <div className="img__wrap"> 
                                <img className="exercise_img" src={exercise.example}></img>
                                <div className="img__description_layer">  
                                    <p className="img__description">Equipment: {exercise.equipment}</p>
                                    <p className="img__description">Category: {exercise.exerciseType}</p>
                                <div>  
                            </div>        
                    </div>   
                </div>         
                            <button 
                                className="trash-workout-btn"
                                data-id={exercise.id}
                                onClick={handleDeleteExercise}
                        ><i class="fas fa-trash-alt"></i>
                            </button> 
                        </div>
                    </>
                )
            })
        } else {return null}
    }

                function handleDeleteExercise(e){
                    // console.log(parseInt(e.target.dataset.id), id)
                    const exerID = parseInt(e.target.dataset.id)
                    fetch(`https://krunch-app.herokuapp.com/workout_exercises/`)
                    .then(r => r.json())
                    .then(data => findJoin(data))

                    function findJoin(data){
                        const filtered = data.filter(element => (
                                element.workout_id===id
                        )) 
                        .filter(element => (element.exercise_id === exerID))
                        const removedID = filtered[0].id
                        handleExerciseRemove(removedID, exerID)
                    }
                 }

    return ( 
        <>
            {exercises[0] ? <h2>You did the following exercises:</h2> : <h2>You should add some exercises to this workout!</h2>}
            <div className = "workout-detail-exercise-images">{exerciseObj()}</div>
        </>
    )
}

export default WorkoutDetailCards