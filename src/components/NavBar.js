import React from "react"
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
    
        <nav className= "nav-bar">
            <ul>
                <li>
                    <NavLink exact to="/">
                        Home    
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/exercises">
                        Exercises    
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/workouts">
                        Workouts    
                    </NavLink>
                </li>
               
                <li className="right">Profile</li> 
            </ul>
        </nav>
    )
}

export default NavBar;