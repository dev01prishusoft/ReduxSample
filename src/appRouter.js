import React from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ReportsList from './modules/home/HomeList';

const AppRouter = (props) => (
  <div className="fullHeight">
    <Router history={props.history}>
      <Switch>
        <Route exact path="/" component={ReportsList} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
