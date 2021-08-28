import { Container, Grid, Link } from "@material-ui/core";
import React from "react";
import { Bar } from 'react-chartjs-2';
import { useHistory } from "react-router-dom";

export default function BarLineChart() {
    const history = useHistory();

    const data = {
        labels: ['Label-1', 'Label-2', 'Label-3', 'Label-4', 'Label-5', 'Label-6'],
        datasets: [{
            label: '# of Lables',
            data: [12, 19, 3, 5, 2, 3],
            type: 'line',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '# of Colors',
            data: [2, 9, 13, 15, 12, 7],
            type: 'bar',
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        tooltips: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: true,
                    drawTicks: true,
                    lineWidth: 1
                },
                ticks: {
                    font: {
                        size: 30
                    }
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: true,
                    drawTicks: true,
                    lineWidth: 1
                },
                ticks: {
                    precision: 0,
                    stepSize: 4,
                    beginAtZero: true,
                    font: {
                        size: 20
                    }
                }
            }]
        }
    }
    return (
        <>
        <Container>
            <Grid style={{ padding: '30px 0'}}>
                <h1>Bar-Line chart</h1>
            </Grid>
            <div style={{ width: '50vw', marginBottom: 50}}>
                <Bar 
                    data={data}
                    options={options}
                    />
            </div>
            <Grid style={{ textAlign: 'left', marginBottom: 40}}>
                <Link onClick={() => history.push('/')}>
                    Back to Dashboard
                </Link>
            </Grid>
        </Container>
        </>
    )
}
