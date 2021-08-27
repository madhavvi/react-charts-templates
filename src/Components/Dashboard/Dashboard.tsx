import React from "react";
import { Grid } from '@material-ui/core';
import BarChart from "../BarChart/BarChart";
import BarLineChart from "../BarLineChart/BarLineChart";

export default function Dashboard() {
    return (
        <>
            <div>
                Dashboard
            </div>
            <Grid md={6} lg={6}>
                <BarChart />
                <BarLineChart />
            </Grid>
        </>
    )
}