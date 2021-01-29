import React, {useEffect, useState} from "react"
import Charts from "./Charts.js"
import {Link} from 'react-router-dom'

function Profile(){
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [weights, setWeights] = useState([])
    const [dates, setDates] = useState([])


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/weights`)
        .then(r => r.json())
        .then((weightObj) => renderWeights(weightObj))
    }, [])

    function renderWeights(weightObj){
        const weightArray = weightObj.map((oneWeight) => oneWeight.weight)
            setWeights(weightArray)
            const datesArray = weightObj.map((oneWeight) => oneWeight.date)
            setDates(datesArray)
    }

    const sortedDates = [...dates].sort((date1, date2) => {
        date1 = date1.split('-').join('')
        date2 = date2.split('-').join('')
        return date1.localeCompare(date2)
    })

    
    console.log(sortedDates)


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/2`)
        .then(r => r.json())
        .then(data => {
            setUser(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;
    // console.log(user)
    const {name, age, bio, height, id} = user

    function handleClick(e){
        console.log(id)
    }

    function handleAddWeight(newWeightObj){
        setWeights([...weights, newWeightObj.weight])
        setDates([...dates, newWeightObj.date])
        // console.log([...weights, newWeightObj.weight])
        // console.log([...dates, newWeightObj.date])
    }

    let recentWeight = weights[weights.length - 1]

    return (
        <>
        <h1 className="page-header">&nbsp;Profile</h1>
        <div className="profile-div">
            <div className= "user">
                <br></br>
                <h2>{name}</h2>
                <p>Member since: 2020</p>
                <p>Height: {height}</p>
                <p>Weight: {recentWeight}</p>
                <p>Age: {age}</p>
                <p>Bio: {bio}</p>

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
                <Charts user={user} weights={weights} dates={sortedDates} handleAddWeight={handleAddWeight} />
            </div>
        </div>    
    </>
    )
}

export default Profile;