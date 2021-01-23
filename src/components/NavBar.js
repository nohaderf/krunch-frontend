import React from "react"
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
    
        <nav className= "nav-bar">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <strong>HOME</strong>  
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/exercises">
                    <strong>EXERCISES</strong>  
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/workouts">
                    <strong>WORKOUTS</strong>      
                    </NavLink>
                </li>
               
                <li className="right"><strong>PROFILE</strong></li> 
            </ul>
        </nav>
    )
}

export default NavBar;