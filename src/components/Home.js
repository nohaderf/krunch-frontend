import React from "react"
import MapContainer from "./MapContainer"
import ScrollToTop from "./ScrollToTop"
import { NavLink } from "react-router-dom";

import home_1 from "../Images/home_1.jpeg"
import home_2 from "../Images/home_2.jpeg"
import home_3 from "../Images/home_3.jpeg"
import home_4 from "../Images/home_4.jpeg"
import home_5 from "../Images/home_5.jpeg"

function Home(){
    return (
        <>
        <div className= "home">
            <div className="info">
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
            </div>

           <h1>- <i class="far fa-laugh-beam"></i> Who Says Exercising Can't Be Pun? -</h1>
           <div className="pun-div">
                <div className="exercise-card">
                    <div className="image-div"><img className="image-ex" src={home_2} alt="KRUNCH FUN"/></div>
                    <p className="pun-q">What does seven days without exercise make?</p>
                    <span className="pun-a">One weak!</span>
                </div> 
                <div className="exercise-card">
                    <div className="image-div"><img className="image-ex" src={home_4} alt="KRUNCH FUN"/></div>
                    <p className="pun-q">How do you get rid of an obese demon?</p>
                    <span className="pun-a">You exercise it.</span>
                </div> 
                <div className="exercise-card">
                    <div className="image-div"><img className="image-ex" src={home_3} alt="KRUNCH FUN"/></div>
                    <p className="pun-q">How do college students exercise?</p>
                    <span className="pun-a">By swimming in their debt.</span>
                </div> 
                <div className="exercise-card">
                    <div className="image-div"><img className="image-ex" src={home_5} alt="KRUNCH FUN"/></div>
                    <p className="pun-q">What is the dairy farmer's favorite exercise?</p>
                    <span className="pun-a">Calf raises.</span>
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
        </div>
        <ScrollToTop />
        </>
    )
}

export default Home;