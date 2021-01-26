import React from "react"
import MapContainer from "./MapContainer"

function Home(){
    return (
        <div className= "home">
           <h1>Home</h1>
           <h1> Gyms Near Me</h1>
           
            <div className="map-div">
                <MapContainer />
            </div>
        </div>
    )
}

export default Home;