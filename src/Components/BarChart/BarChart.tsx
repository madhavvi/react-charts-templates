import React from "react";
import { Bar } from 'react-chartjs-2';

export default function BarChart() {
    const data = {
        labels: ['Label-1', 'Label-2', 'Label-3', 'Label-4', 'Label-5', 'Label-6'],
        datasets: [{
            label: '# of Lables',
            data: [12, 19, 3, 5, 2, 3],
            type: 'bar',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }, {
            label: '# of Colors',
            data: [2, 9, 13, 15, 12, 7],
            type: 'bar',
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    opacity: 0,
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    opacity: 0,
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        },
        tooltips: {
            mode: 'label',
        },
    }
    return (
        <>
            <div>
                <Bar 
                    data={data}
                    options={options}
                />
            </div>
        </>
    )
}
