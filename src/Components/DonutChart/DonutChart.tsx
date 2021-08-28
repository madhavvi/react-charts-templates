import { Container, Grid, Link } from "@material-ui/core";
import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { useHistory } from "react-router-dom";

export default function DonutChart(){
    const history = useHistory();
    const data = {
        labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6'],
        datasets: [{
            label: '# of Lables',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }]
    };

    const options = {
        legend: {
            // position: 'right',
            // align: 'start',
            labels: {
                padding: 10
            },
            onHover(e: any){
                e.target.style.cursor = 'pointer'
            },
            onLeave(e: any){
                e.target.style.cursor = 'default'
            }
        },
        tooltips: {
            mode: 'label'
        },
    }

    return (
        <>
        <Container>
            <Grid style={{ padding: '30px 0' }}>
                <h1>Doughnut chart</h1>
            </Grid>
            <div style={{ width: '50vw', margin: 50 }}>
                <Doughnut
                    data={data}
                    options={options}
                />
            </div>
            <Grid style={{ textAlign: 'left', marginBottom: 40 }}>
                <Link onClick={() => history.push('/')}>
                    Back to Dashboard
                </Link>
            </Grid>
        </Container>
            
        </>
    )
}