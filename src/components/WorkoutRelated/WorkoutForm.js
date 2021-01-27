import React, {useState} from "react"
import {useHistory} from "react-router-dom"
// import {Link} from "react-router-dom"



function WorkoutForm(){
    // const [workout, setWorkout] = useState(null);
    // const params = useParams()
    const history = useHistory()

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [notes, setNotes] = useState("")
    const exercises = []


    // console.log(params)


    function handleSubmit(e) {
        e.preventDefault()
        
        const formData = {
            name,
            date,
            notes, 
            exercises
        }



        
            fetch(`http://localhost:3000/workouts/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            .then(r => r.json())
            .then((newWorkout) => {
                history.push(`/workouts/${newWorkout.id}`)
            })
        
    }   

   
    return(
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Create New Workout</h3>
                <label>
                    Name Your Workout  
                </label>             
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br></br>
                <label>Date of Workout</label>
                <input 
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                /><br></br>
                <label>Any notes about the Workout</label>
                <textarea 
                    type="textarea"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                /><br></br>
                <button type="submit">Submit</button>
                
            </form>

        </section>
    )
}


export default WorkoutForm