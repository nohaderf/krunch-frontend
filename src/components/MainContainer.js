import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import ExercisePage from "./ExercisePage"
import WorkoutsPage from "./WorkoutsPage"
import Home from "./Home";


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
            <h1>MainContainer</h1>
        </div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/exercises">
                <ExercisePage exercises={exercises} />    
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