import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";

function ChartReps(){
    // const [chartData, setChartData] = useState({})
    // const [bmi, setBmi] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts`)
        .then(r => r.json())
        .then(workoutObj => calcWorkoutData(workoutObj))
    }, [])

    function calcWorkoutData(workoutObj){
        
        //we want to sort workout obj based on tag
        //null, chest, abs, cardio, arms, legs
        let repsArr = []

        //for each tag, we want to do the below logic.
        //in the end, repsArr will be an array in the order that we know

        
        const absObjs = workoutObj.filter(wkt => {
            return wkt.tag === "Abs"
        })

        let absTotal = 0
        const absRepArr = absObjs.map(abWorkout => {
            return abWorkout.WorkoutExercises.map(we =>{
                absTotal = absTotal+ we.reps
            })
        })
        repsArr.push(absTotal)
        //----------------------------------
        const chestObjs = workoutObj.filter(wkt => {
            return wkt.tag === "Chest"
        })

        let chestTotal = 0
        const chestRepArr = chestObjs.map(abWorkout => {
            return abWorkout.WorkoutExercises.map(we =>{
                chestTotal = chestTotal+ we.reps
            })
        })
        repsArr.push(chestTotal)
        //----------------------------------
        const armsObjs = workoutObj.filter(wkt => {
            return wkt.tag === "Arms"
        })

        let armsTotal = 0
        const armsRepArr = armsObjs.map(abWorkout => {
            return abWorkout.WorkoutExercises.map(we =>{
                armsTotal = armsTotal+ we.reps
            })
        })
        repsArr.push(armsTotal)
        //----------------------------------
        const cardioObjs = workoutObj.filter(wkt => {
            return wkt.tag === "Cardio"
        })

        let cardioTotal = 0
        const cardioRepArr = cardioObjs.map(abWorkout => {
            return abWorkout.WorkoutExercises.map(we =>{
                cardioTotal = cardioTotal+ we.reps
            })
        })
        repsArr.push(cardioTotal)
        //----------------------------------
        const legsObjs = workoutObj.filter(wkt => {
            return wkt.tag === "Legs"
        })

        let legsTotal = 0
        const legsRepArr = legsObjs.map(abWorkout => {
            return abWorkout.WorkoutExercises.map(we =>{
                legsTotal = legsTotal+ we.reps
            })
        })
        repsArr.push(legsTotal)
        //----------------------------------
        

        
        
        console.log(repsArr)    

      
        // console.log(workoutObj)
        // setBmi(bmiArray)
    }


    return(
        <>
        <p>Hello</p>
        </>
    )
    

    // function chart(){
    //     setChartData({
    //         labels: dates,
    //         datasets: [
    //             {
    //                 label: 'BMI',
    //                 data: bmi,
    //                 fill: false,
    //                 lineTension: 0.1,
    //                 backgroundColor: "#2085d8",
    //                 borderColor: "#2085d8",
    //                 borderCapStyle: "butt",
    //                 borderDash: [],
    //                 borderDashOffset: 0.0,
    //                 borderJoinStyle: "miter",
    //                 pointBorderColor: "#2085d8",
    //                 pointBackgroundColor: "#FFF",
    //                 pointBorderWidth: 1,
    //                 pointHoverRadius: 5,
    //                 pointHoverBackgroundColor: "#2f3640",
    //                 pointHoverBorderColor: "#2085d8",
    //                 pointHoverBorderWidth: 2,
    //                 pointRadius: 1,
    //                 pointHitRadius: 10,
    //             }
    //         ]
    //     })
    // }

    // useEffect(() => {
    //     chart()
    // }, [ bmi, dates])

    // return(
    //     <div className="chart">
    //         <Line 
    //             data={chartData} 
    //             options={{
    //                 responsive: true,
    //                 title: { text: "DAILY BMI TREND", display:true },       
    //             }} 
    //         />
            
    //     </div>
    // );
}

export default ChartReps;