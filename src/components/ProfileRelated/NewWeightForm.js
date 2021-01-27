import React, { useState } from "react";

function NewWeightForm({ onAddWeight }){
    const [showForm, setShowForm] = useState(true)
    const [weight, setWeight] = useState()
    const [date, setDate] = useState('')

    function handleCloseForm(){
        setShowForm(false)
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = {
            weight: weight,
            date: date,
            user_id: 1,
        }

        // console.log(formData)
        fetch(`http://localhost:3000/weights`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json)
        .then(onAddWeight)
    }

    return (
        <>
        { showForm ? <div className="form-popup">
            <button onClick={handleCloseForm} className="close-form">X</button>
            <form onSubmit={handleSubmit} className="form-container">
                <h1>Add New Weight</h1>

                <label for="email"><b>Date</b></label>
                <input 
                    type="date" 
                    placeholder="Date" 
                    name="date" 
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required>
                </input>

                <label for="psw"><b>Weight (lbs)</b></label>
                <input 
                    type="number" 
                    placeholder="Enter Weight" 
                    name="weight" 
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    required>
                </input>

                <button type="submit" className="submit-btn">submit</button>
            </form> 
        </div> : null } 
        </>
    )
}

export default NewWeightForm;


