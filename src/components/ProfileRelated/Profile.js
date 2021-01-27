import React, {useEffect, useState} from "react"
import Charts from "./Charts.js"
import {Link} from 'react-router-dom'

function Profile(){
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/2`)
        .then(r => r.json())
        .then(data => {
            setUser(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;
    console.log(user)
    const {name, age, bio, height, weight, id} = user

    function handleClick(e){
        console.log(id)
    }

    return (
        <>
        <h1 className="page-header">&nbsp;Profile</h1>
        <div className="profile-div">
            <div className= "user">
                
                <br></br>
                <h2>{name}</h2>
                <p>Member since: 2020</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Age: {age}</p>
                <p>Bio: {bio}</p>
            </div>
            <div className="user-edit">
                <button>
                    <Link to={"/profile/edit/"}>
                    Edit
                    </Link>
                </button>
            </div>

        </div>
            <div className="chart-container">
                <h1>Track Your Progress</h1>
                <Charts />
            </div>
    </>
    )
}

export default Profile;