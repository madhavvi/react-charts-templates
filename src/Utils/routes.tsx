import { Route, Switch } from "react-router-dom";
import BarChart from "../Components/BarChart/BarChart";
import BarLineChart from "../Components/BarLineChart/BarLineChart";
import Dashboard from "../Components/Dashboard/Dashboard";


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
                    {/* <User /> */}
                </Route>
                <Route exact path={`/account/profile`}>
                    {/* <Profile /> */}
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;