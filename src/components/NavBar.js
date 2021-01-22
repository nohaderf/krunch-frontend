import React from "react"
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className= "nav-bar">
            <nav>
                <NavLink exact to="/">
                    Home    
                </NavLink>
                <NavLink exact to="/exercises">
                    Exercises    
                </NavLink>
                <NavLink exact to="/workouts">
                    Workouts    
                </NavLink>
               
                <li className="right">Profile</li> 
            </nav>
        </nav>
    )
}

export default NavBar;