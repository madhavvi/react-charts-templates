import React from "react";
import { Card, CardContent, Container, Grid, Link, Typography } from '@material-ui/core';
import BarChart from "../BarChart/BarChart";
import BarLineChart from "../BarLineChart/BarLineChart";
import './Dashboard.css';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const history = useHistory();
    return (
    <>
    <Container>
        <Grid>
            <h1>Dashboard</h1> 
        </Grid>
        <Grid item md={12} lg={12}>
            <Grid item md={12} lg={12} className="align-vertical-center">
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <Link onClick={() => history.push('/bar-chart')}>
                                BAR Chart
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <Link onClick={() => history.push('./line-chart')}>
                                Mix BAR-LINE Chart
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            BAR Chart
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            BAR Chart
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid item md={6} lg={6}>
            <BarChart />
            <BarLineChart />
        </Grid>
    </Container>
    </>
    )
}