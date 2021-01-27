import React from "react"
import MapContainer from "./MapContainer"
import home_1 from "../Images/home_1.jpeg"
import ScrollToTop from "./ScrollToTop"
import { NavLink } from "react-router-dom";

function Home(){
    return (
        <div className= "home">
           <h1>- <i class="fas fa-dumbbell"></i> Bring Your Workout Home -</h1>
           <div className="home-div">
               <img className="home-img-1" src={home_1} alt="KRUNCH"></img>
               <div className="home-fade-in">
                    <ul>
                        <li>Choose your own exercises</li>
                        <li>Customize and build your workout routine</li>
                        <li>Track your progress</li>
                    </ul>
                    <NavLink exact to="/workouts">
                        <button className="get-started-btn">Get started</button> 
                    </NavLink>
                </div>
           </div>
           <h1>- <i class="fas fa-map-marker-alt"></i> Gyms Near Me -</h1>
           
            <div className="locations">
                <div className="location-p">
                    <p>Lack equpiment?</p>
                    <p>No Problem.</p>
                </div>

                <div className="map-div">
                    <MapContainer />
                </div>
            </div>
            
            <ScrollToTop />
        </div>
    )
}

export default Home;