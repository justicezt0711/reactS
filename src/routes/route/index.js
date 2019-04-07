import React from 'react';
import { Route, Switch, NavLink, Link } from "react-router-dom";

function Contact() {
  return <p>Contact</p>
}
function About() {
  return <p>About</p>
}
function NoMatch() {
  return <p>NoMatch</p>
}
function Topic(props) {
  const match = props.match;
  return <h3>Requested Param: {match.params.id}</h3>;
}
function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}
function Routes(props) {
  return (
    <div>
      <NavLink to="/routes/about">about</NavLink>
      <NavLink to="/routes/contact">contact</NavLink>
      <button onClick={() => props.history.push('/routes/topics')}>topics</button>
      <Switch>
        <Route path="/routes/about" component={About} />
        <Route path="/routes/contact" component={Contact} />
        <Route path="/routes/topics" component={Topics} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default Routes