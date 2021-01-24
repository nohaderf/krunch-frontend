import React, {useEffect, useState} from "react"

function Profile(){
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)

    
    
    useEffect(() => {
        fetch(`http://localhost:3000/users/2`)
        .then(r => r.json())
        .then(data => {
            setUser(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;
    console.log(user)
    const {name, age, bio, height, weight} = user

    return (
        <nav className= "profile">
           <h1>Your Profile</h1> 
           <br></br>
           <h5>{name}</h5>
           <p>Height: {height}</p>
           <p>Weight: {weight}</p>
        </nav>
    )
}

export default Profile;