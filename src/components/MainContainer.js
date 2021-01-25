import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";

import ExercisePage from "./ExerciseRelated/ExercisePage"
import WorkoutsPage from "./WorkoutRelated/WorkoutsPage"
import Home from "./Home";

import main from '../main.jpg';
import WorkoutDetail from "./WorkoutRelated/WorkoutDetail";
import EditWorkout from "./WorkoutRelated/WorkoutForm";

import ExerciseDetail from "./ExerciseRelated/ExerciseDetail";
import Profile from "./Profile";
import WorkoutEditForm from "./WorkoutRelated/WorkoutEditForm";


function MainContainer(){

    const [exercises, setExercises] = useState([])
    const [allWorkouts, setAllWorkouts] = useState([])
    
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/exercises`)
        .then(r => r.json())
        .then(setExercises)
    }, [])

    // console.log(process.env.REACT_APP_API_BASE_URL)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts`)
        .then(r => r.json())
        .then(setAllWorkouts)
    }, [])



    function handleDeleteWorkout(deleteWorkout) {
        const updateWorkoutsList = allWorkouts.filter(workout => {
            return workout.id !== deleteWorkout.id 
        })
        setAllWorkouts(updateWorkoutsList)
    }

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
            <Route exact path="/workouts/:id/edit">
                <WorkoutEditForm />
            </Route>
            <Route exact path="/workouts/new">
                <EditWorkout/>
            </Route>
            <Route exact path="/workouts/:id">
                <WorkoutDetail onDeleteClick={handleDeleteWorkout} />
            </Route>
            <Route exact path="/workouts">
                <WorkoutsPage allWorkouts={allWorkouts}/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>

            {/* <Route path="*">
                <Redirect to="/" />
            </Route> */}

        </Switch>
        </>
    )
}

export default MainContainer;