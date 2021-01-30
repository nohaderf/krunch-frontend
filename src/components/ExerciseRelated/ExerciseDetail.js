import React, { useEffect, useState} from "react"
import { Link, useHistory, useParams} from "react-router-dom"

function ExerciseDetail(){
    const history = useHistory()

    const [selectedExercise, setExercise] = useState(null);
    // const [showDetails, setShowDetails] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();

    useEffect(() => {
        fetch(`https://krunch-app.herokuapp.com/exercises/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setExercise(data)
            setIsLoaded(true)
        })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;
    
    const {exercise, equipment, exerciseType, example} = selectedExercise


    // function handleCloseDetails(){
    //     setShowDetails(false)
    // }

    return(
        <>
        <h1 className="page-header">&nbsp;Exercise Details</h1>
        {/* { showDetails ? <div className="form-popup"> */}
            {/* <button onClick={handleCloseDetails} className="close-form">X</button> */}
             <div className="exercise-details-div">  
                <h1>{exercise}</h1>
                <p>You will need {equipment}</p>
                <p>Type of Exercise: {exerciseType}</p>
                <br></br>
                <img src={example} alt={exercise}></img>
    
                <div>
                    <Link to={`/workouts/`}>
                        <button>Back to Workouts</button>
                    </Link>    
                </div>   
             </div>
            
            {/* </div> : null } */}
        </>
    )
 }

export default ExerciseDetail