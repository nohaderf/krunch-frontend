import React, { useContext, useState } from "react"
import { NavLink , useHistory} from "react-router-dom";
import logo from '../Images/logo.png';
import {LoginContext} from './Login';

function NavBar(){
    const [navBar, setNavBar] = useState(false)
    const [smallLogo, setSmallLogo] = useState(false)

    const {loggedIn, toggle} = useContext(LoginContext)
    const history = useHistory()

    console.log(loggedIn)

    function changeBackground() {
        if (window.scrollY >= 40) {
            setNavBar(true)
            setSmallLogo(true)
        } else {
            setNavBar(false)
            setSmallLogo(false)
        }
    }

    window.addEventListener("scroll", changeBackground)


    const headerLinksObj = () => {
        return (
            <>
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
                <li>
                    <NavLink exact to="/profile">
                        <strong>PROFILE</strong>      
                    </NavLink>
                </li> 
            </>
        )}
            



    return (
        <nav className={navBar ? "nav-bar active" : "nav-bar"}>
            <NavLink exact to="/">
                <img className={smallLogo ? "logo active" : "logo"} src={logo} alt="Krunch" />
            </NavLink>
            <ul>
                <li>
                    <NavLink exact to="/">
                        <strong>HOME</strong>  
                    </NavLink>
                </li>
                {loggedIn ? headerLinksObj() : history.push(`/`)}         
            </ul>
            <p onClick={toggle}>{loggedIn ? "LOGOUT" : "LOGIN"}</p>
        </nav>
    )
}

export default NavBar;