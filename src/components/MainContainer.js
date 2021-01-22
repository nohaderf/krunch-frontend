import React from "react"
import { Route, Switch } from "react-router-dom";
import ExercisePage from "./ExercisePage"
import WorkoutsPage from "./WorkoutsPage"
import Home from "./Home";


function MainContainer(){
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
                <ExercisePage/>    
            </Route>
            <Route path="/workouts">
                <WorkoutsPage/>
            </Route>
            {/* <Route path="*">
                <Redirect to="/" />
            </Route> */}

        </Switch>
        </>
        // <ExercisePage />
    )
}

export default MainContainer;