
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clock from './routes/clock/index'
import Toggle from './routes/toggle/index'
import List from './routes/list/index'
import Form from './routes/form/index'
import Stateup from './routes/stateup/index'
import Components from './routes/component/index'
import Filter from './routes/filter/index'
import Axios from './routes/axios/index'
import Routes from './routes/route/index'
import Redux from './routes/redux/index'
import ReduxChange from './routes/redux/change'


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Axios</Link>
            </li>
            <li>
              <Link to="/clock/">Clock</Link>
            </li>
            <li>
              <Link to="/toggle/">Toggle</Link>
            </li>
            <li>
              <Link to="/list/">List</Link>
            </li>
            <li>
              <Link to="/form/">From</Link>
            </li>
            <li>
              <Link to="/stateup/">Stateup</Link>
            </li>
            <li>
              <Link to="/components/">Components</Link>
            </li>
            <li>
              <Link to="/filter/">Filter</Link>
            </li>
            <li>
              <Link to="/routes/">Routes</Link>
            </li>
            <li>
              <Link to="/redux/">Redux</Link>
            </li>
            <li>
              <Link to="/reduxchange/">ReduxChange</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Axios} />
        <Route path="/clock/" component={Clock} />
        <Route path="/toggle/" component={Toggle} />
        <Route path="/list/" component={List} />
        <Route path="/form/" component={Form} />
        <Route path="/stateup/" component={Stateup} />
        <Route path="/components/" component={Components} />
        <Route path="/filter/" component={Filter} />
        <Route path="/routes/" component={Routes} />
        <Route path="/redux/" component={Redux} />
        <Route path="/reduxchange/" component={ReduxChange} />
      </div>
    </Router>
  );
}

export default AppRouter;