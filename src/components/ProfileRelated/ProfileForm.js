import React, {useState} from "react"
import { useHistory, Link} from "react-router-dom"

function ProfileForm(){
    const history = useHistory()

    const [bio, setBio] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
                       
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/2`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({bio: bio}),
        })
          .then(response => response.json())
          .then(history.push(`/profile`));
    }   
   
    return(
        <section>
            
            <form className="form" onSubmit={handleSubmit}>
                <Link to={`/profile`}><button className="exit">X</button></Link>
                <h3>Edit Your Bio</h3>
                    <textarea 
                    type="textarea"
                    name="notes"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                /><br></br>
                <button type="submit">Submit</button>
    
            </form>

        </section>
    )
}


export default ProfileForm