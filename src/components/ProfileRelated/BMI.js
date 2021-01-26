import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function BMI(){
    const [chartData, setChartData] = useState({})

    const weights = [195, 199, 198, 201, 196, 195, 200]
    const bmiArray = weights.map( weight => {
        return ((weight / 72 / 72 ) * 703)
    })

    // console.log(bmiArray)

    function chart(){
        setChartData({
            labels: ["July", "August", "September", "October", "November", "December", "January"],
            datasets: [
                {
                    label: 'BMI',
                    data: bmiArray,
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
    }, [])

    return(
        <div className="chart">
            <Line 
                data={chartData} 
                options={{
                    responsive: true,
                    title: { text: "MONTHLY BMI TREND", display:true },       
                }} 
            />
        </div>
    );
}

export default BMI;