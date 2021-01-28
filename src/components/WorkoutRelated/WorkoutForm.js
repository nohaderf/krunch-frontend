import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"



function WorkoutForm(){
    const history = useHistory()
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [notes, setNotes] = useState("")
    const [tag, setTag] = useState(null)
    const exercises = []


    // console.log(params)


    function handleSubmit(e) {
        e.preventDefault()
        
        const formData = {
            name,
            date,
            notes, 
            exercises,
            tag
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
                <Link to={`/workouts`}>
                    <button className="exit">X</button>
                </Link>
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
                />
                <br></br>
                <select onChange={(e) => setTag(String(e.target.value))}>
                    <option selected value="null">Workout Type</option>
                    <option value="Abs">Abs</option>
                    <option value="Chest">Chest</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>

                </select>


                <br></br>
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