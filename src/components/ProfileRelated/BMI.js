import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function BMI(){
    const [chartData, setChartData] = useState({})
    const [weights, setWeights] = useState([])
    const [dates, setDates] = useState([])
    const [bmi, setBmi] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/weights`)
        .then(r => r.json())
        .then((weightObj) => renderWeights(weightObj))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/users/1`)
        .then(r => r.json())
        .then((userObj) => calculateBMI(userObj.height))
    }, [weights])

    function renderWeights(weightObj){
        const weightArray = weightObj.map((oneWeight) => oneWeight.weight)
            setWeights(weightArray)
            const datesArray = weightObj.map((oneWeight) => oneWeight.date)
            setDates(datesArray)
    }

    function calculateBMI(height){
        const numHeight = height.replace("'", " ")
        const heightInches = parseInt(numHeight * 12)
        const bmiArray = weights.map( weight => {
            return ( (weight / heightInches / heightInches ) * 703).toFixed(1)
        })
        setBmi(bmiArray)
    }
    

    function chart(){
        setChartData({
            labels: dates,
            datasets: [
                {
                    label: 'BMI',
                    data: bmi,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#2085d8",
                    borderColor: "#2085d8",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#2085d8",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#2f3640",
                    pointHoverBorderColor: "#2085d8",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [ bmi, dates])

    return(
        <div className="chart">
            <Line 
                data={chartData} 
                options={{
                    responsive: true,
                    title: { text: "DAILY BMI TREND", display:true },       
                }} 
            />
            
        </div>
    );
}

export default BMI;