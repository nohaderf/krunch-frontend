import React, {useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

function WorkoutEditForm(props){
    // const [workout, setWorkout] = useState(null);
    const params = useParams()
    const history = useHistory()
    console.log(history.location.state.workout.workout)
    const wkt = history.location.state.workout.workout;

    const [name, setName] = useState(wkt.name)
    const [date, setDate] = useState(wkt.date)
    const [notes, setNotes] = useState(wkt.notes)


    function handleSubmit(e) {
        e.preventDefault()
        
        const formData = {
            name,
            date,
            notes            
        }
        
            fetch(`${process.env.REACT_APP_API_BASE_URL}/${wkt.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            .then(r => r.json())
            .then((newWorkout) => {
                history.push(`/workouts/${wkt.id}`)
            })
    }   

       return(
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Edit this Workout</h3>
                <label>
                    Name of workout:    
                </label>             
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Date of Workout</label>
                <input 
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}

                />
                <label>Any notes about the Workout</label>
                <textarea 
                    type="textarea"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <button type="submit">Submit</button>
                
            </form>

        </section>
    )
}


export default WorkoutEditForm