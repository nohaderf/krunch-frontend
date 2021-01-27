import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Weight(){
    const [chartData, setChartData] = useState({})
    const [weights, setWeights] = useState([])
    const [dates, setDates] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/weights`)
        .then(r => r.json())
        .then((weightObj) => renderWeights(weightObj))
    }, [])

    function renderWeights(weightObj){
        const weightArray = weightObj.map((oneWeight) => oneWeight.weight)
            setWeights(weightArray)
            const datesArray = weightObj.map((oneWeight) => oneWeight.date)
            setDates(datesArray)
    }
    
    console.log(weights)
    console.log(dates)

    function chart(){
        setChartData( 
            {
                labels: dates,
            datasets: [
                {
                    label: 'Weight (lbs)',
                    data: weights,
                    fill: false,
                    lineTension: 0,
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
    }, [weights, dates])

    return(
        <div className="chart">
            <Line 
                data={chartData} 
                options={{
                    responsive: true,
                    title: { text: "DAILY WEIGHT TREND", display:true },       
                }} 
            />
        </div>
    );
}

export default Weight;