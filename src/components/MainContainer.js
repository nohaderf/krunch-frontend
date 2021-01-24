import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import ExercisePage from "./ExercisePage"
import WorkoutsPage from "./WorkoutsPage"
import Home from "./Home";

import main from '../main.jpg';
import WorkoutDetail from "./WorkoutDetail";
import ExerciseDetail from "./ExerciseDetail";


function MainContainer(){

    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:3000/exercises`)
        .then(r => r.json())
        .then(setExercises)
    }, [])

    return (
        <>
        <div className="main-container">
            {/* <p className="slogan">Let's Krunch Again</p> */}
            <img className="main-img" src={main} alt="Krunch" />
        </div>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/exercises/:id">
                <ExerciseDetail/>    
            </Route>
            <Route path="/exercises">
                <ExercisePage exercises={exercises} />    
            </Route>
            <Route exact path="/workouts/:id">
                <WorkoutDetail />
            </Route>
            <Route path="/workouts">
                <WorkoutsPage/>
            </Route>


            {/* <Route path="*">
                <Redirect to="/" />
            </Route> */}

        </Switch>
        </>
    )
}

export default MainContainer;