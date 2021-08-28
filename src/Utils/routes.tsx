import { Route, Switch } from "react-router-dom";
import BarChart from "../Components/BarChart/BarChart";
import BarLineChart from "../Components/BarLineChart/BarLineChart";
import Dashboard from "../Components/Dashboard/Dashboard";
import DonutChart from "../Components/DonutChart/DonutChart";
import PieChart from "../Components/PieChart/PieChart";


function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/bar-chart">
                    <BarChart />
                </Route>
                <Route exact path={`/line-chart`}>
                    <BarLineChart />
                </Route>
                <Route exact path={`/pie-chart`}>
                    <PieChart />
                </Route>
                <Route exact path={`/donut-chart`}>
                    <DonutChart />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;