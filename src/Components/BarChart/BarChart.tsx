import React from "react";
import { Container, Grid, Link } from "@material-ui/core";
import { Bar } from 'react-chartjs-2';
import { useHistory } from "react-router-dom";

export default function BarChart() {
    const history = useHistory();

    const data = {
        labels: ['Label-1', 'Label-2', 'Label-3', 'Label-4', 'Label-5', 'Label-6'],
        datasets: [{
            label: '# of Lables',
            data: [12, 19, 3, 5, 2, 3],
            type: 'bar',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1
        }, {
            label: '# of Colors',
            data: [2, 9, 13, 15, 12, 7],
            type: 'bar',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                },
                ticks: {
                    precision: 0,
                    stepSize: 5,
                    beginAtZero: true,
                },
            }]
        },
        tooltips: {
            mode: 'label',
        },
    }
    return (
        <>
        <Container>
            <Grid style={{ textAlign: 'left', marginBottom: 40}}>
                <Link onClick={() => history.push('/')}>
                    Dashboard
                </Link>
            </Grid>
            <div style={{ width: '50vw', height: '50vh'}}>
                <Bar 
                    data={data}
                    options={options}
                    />
            </div>
        </Container>
        </>
    )
}
