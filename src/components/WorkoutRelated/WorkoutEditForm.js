import React, {useState } from "react"
import { Link, useHistory } from "react-router-dom"

function WorkoutEditForm(props){
    const history = useHistory()
    const wkt = history.location.state.workout;

    const [name, setName] = useState(wkt.name)
    const [date, setDate] = useState(wkt.date)
    const [notes, setNotes] = useState(wkt.notes)
    const [tag, setTag] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        
        const formData = {
            name,
            date,
            notes,
            tag            
        }
        
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/${wkt.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(history.push(`/workouts/${wkt.id}`)
        )
    }   

       return(
        <section>
            <form className="form" onSubmit={handleSubmit}>
            <Link to={`/workouts`}>
                    <button className="exit">X</button>
                </Link>
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
                <select onChange={(e) => setTag(String(e.target.value))}>
                    <option selected value="null">Workout Type</option>
                    <option value="Abs">Abs</option>
                    <option value="Chest">Chest</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
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