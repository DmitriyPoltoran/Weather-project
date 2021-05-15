import "./App.css";
import React from "react";
import EventsTable from "./components/EventsTable.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/map">Map</Link>
            </li>

            <li>
              <Link to="/weather">Weather on weak</Link>
            </li>

           

          </ul>
        </nav>

        <div className="App">
          <section>
            <Switch>

              <Route path="/map">
                <Map />
              </Route>

              <Route path="/weather">
                <h1>Weather</h1>
                Welcome to the weather list! Click at the button to reload the page!
                <EventsTable />
              </Route>

             

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. Please explore
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Map() {
  let location = useLocation();

  return (
    <div>
      <h2>Map</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}




export default App;