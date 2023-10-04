import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';

import { Bar } from 'react-chartjs-2';



export default function Barchart({ userData }) {
    const [udata, setUdata] = useState(userData)

    useEffect(() => {
        // setUdata(Object.values())
        console.log(userData);
        let x = [];
        let newArray = []
        var sum = userData?.map(item => {
            let x = Object.values(item)[0];
            let smallArray = Object.values(x)
            console.log(smallArray);
            newArray.push(smallArray.reduce((accumulator, value) => {
                return +accumulator + +value;
            }, 0))
            console.log(newArray);
            setUdata(newArray)



        })

    }, [userData]);

    // useEffect(() => {
    //     console.log(udata);
    // }, [udata])


    let data = {
        labels: ["Saturday", "Sunday", "Monday", "Tuesday", "Thursday", "Friday"],
        datasets: [{
            label: 'Customer Transactions',
            data: udata,

            backgroundColor: ['rgba(165, 105, 189, 1)'],
            borderColor: ['rgba(165, 105, 90, 1)'],
            pointBorderColor: ['rgba(165, 11, 90, 1)']

        }]
    };


    return (<>

        <h2 className='text-center main-color'>Customer Transaction Chart</h2>
        <div className='chart'>
            <Bar data={data} 
                
                options={{ maintainAspectRatio: true }} 
                responsive = {true}/>

        </div>
    </>
    )
}
