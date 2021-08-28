import React from "react";
import { Card, CardContent, Container, Grid, Link, Typography } from '@material-ui/core';
import './Dashboard.css';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const history = useHistory();
    return (
    <>
    <Container>
        <Grid className="dashboard-header">
            <h1>Dashboard</h1> 
        </Grid>
        <Grid item md={12} lg={12}>
            <Grid item md={12} lg={12} className="align-vertical-center">
                <Card className="card">
                    <CardContent className="card-content">
                        <Typography color="textSecondary" gutterBottom>
                            <Link onClick={() => history.push('/bar-chart')}>
                                BAR Chart
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="card-content">
                        <Typography color="textSecondary" gutterBottom>
                            <Link onClick={() => history.push('./line-chart')}>
                                BAR-LINE Chart
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="card-content">
                        <Typography color="textSecondary" gutterBottom>
                            <Link onClick={() => history.push('./pie-chart')}>
                                PIE Chart
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent className="card-content">
                        <Typography color="textSecondary" gutterBottom>
                            <Link onClick={() => history.push('./donut-chart')}>
                                Doughnut Chart
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
    </>
    )
}