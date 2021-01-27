import React, { useState, useEffect } from "react";
import Weight from "./Weight.js"
import BMI from "./BMI.js"
import NewWeightForm from "./NewWeightForm.js"

function Charts({ user, weights, dates, handleAddWeight }){
    const [showWeight, setShowWeight] = useState(true)
    const [showForm, setShowForm] = useState(false)

    
    function handleShowWeight(){
        setShowWeight(true)
    }

    function handleBMI(){
        setShowWeight(false)
    }

    function toggleShowForm(){
        setShowForm(!showForm)
    }

    
    return (
        <>
        <div className="charts-div">
            <div className="chart-btns-div">
                <li><button onClick={handleShowWeight} className="chart-btns weight">WEIGHT</button></li>
                <li><button onClick={handleBMI} className="chart-btns bmi">BMI</button></li>
            </div>
            
            { showWeight ? <Weight weights={weights} dates={dates} /> : <BMI weights={weights} dates={dates} />  }

        </div>
        <button onClick={toggleShowForm} className="add-weight">ADD WEIGHT</button>
        { showForm ? <NewWeightForm user={user} onAddWeight={handleAddWeight} /> : null }
        </>
    )
}

export default Charts;