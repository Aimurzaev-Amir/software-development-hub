import { BrowserRouter, Route, Switch } from "react-router-dom";
// routes paths
import { publicRoutes } from "./routesPaths";
// pages
import { Page404 } from "../pages/404/Page404";
// components
import { Header } from "../components/Header/Header";
// styles
import { useRoutesStyles } from "./RoutesStyles";

export const Routes = () => {
  // hooks
  const classes = useRoutesStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.bodyWrapper}>
        <div className={classes.body}>
          <Switch>
            {publicRoutes.map((route, idx) => {
              return (
                route.component && (
                  <Route key={idx} path={route.path} exact={route.exact} render={() => <route.component />} />
                )
              );
            })}
            <Route component={Page404} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
