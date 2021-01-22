import React from "react"

function NavBar(){
    return (
        <nav className= "nav-bar">
            <ul className= "nav">
                <li>Home</li> 
                <li>Exercises</li> 
                <li>Workouts</li> 
                <li className="right">Profile</li> 
            </ul>
        </nav>
    )
}

export default NavBar;