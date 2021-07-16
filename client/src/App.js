import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './other/AuthContext';
import ProtectedRoute from './other/ProtectedRoute';
import Home from './pages/Home';
import Authenticate from './pages/Authenticate';
import ControlPanel from './pages/ControlPanel';
import Unmatched from './pages/Unmatched';
import './App.css';

// userData format:
// userData = {
//   id,
//   username,
//   email,
//   sites: [siteobject: {
//     sitename,
//     typeofsite,
//     intendedaudience,
//     agegroup,
//     ...
//   }]
// }

// TODO: Make navbar responsive with a sidebar menu
// TODO: Make dropdown absolute so window height doesn't change.

// TODO: Code control panel - sidebar component & project card component
// TODO: control panel should load sites data into state on component mount ( useEffect hook )

/// Backend considerations
// TODO: Look into how to refresh the token if user is active
// TODO: When a sites progress is saved( so more/less boxes are checked ) then recalculate and update the progress % in db

function App() {
  const existing_token = JSON.parse(localStorage.getItem('token')) || null;
  const existing_user = JSON.parse(localStorage.getItem('user')) || null;
  const initial_token_state = { token: undefined, expiry: undefined, date_created: undefined };
  const initial_user_state = { id: undefined, username: undefined, email: undefined };
  // Context
  const [authToken, setAuthToken] = useState(existing_token || initial_token_state);
  const [userData, setUserData] = useState(existing_user || initial_user_state);

  // Data if new user
  const [signupData, setSignupData] = useState({});

  function setToken(token) {
    setAuthToken(token);
    // Set token in localstorage. (string + expiry date + date created)
    localStorage.setItem('token', JSON.stringify(token));
  }

  // function logout() {
  //   setAuthToken(initial_token_state);
  //   setUserData(initial_user_state);
  //   localStorage.setItem("token", JSON.stringify(initial_token_state));
  //   localStorage.setItem("user", JSON.stringify(initial_user_state));
  // }

  // eslint-disable-next-line
  function logout() {
    setAuthToken(initial_token_state);
    setUserData(initial_user_state);
    localStorage.setItem('token', JSON.stringify(initial_token_state));
    localStorage.setItem('user', JSON.stringify(initial_user_state));
  }

  function setData(user) {
    // Set user state
    localStorage.setItem('user', JSON.stringify(user));
    setUserData({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  }

  useEffect(() => {
    if (authToken.token) {
      // If the current time is > token.created + expiry date, then set it to no token
      let date_now = Date.now();
      let diff = Math.abs(date_now - authToken.date_created);
      let minutes = Math.floor(diff / 1000 / 60);

      if (minutes >= authToken.expiry) {
        logout();
      }
    }
  }, [authToken, logout]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken, logout, userData, setUserData: setData }}>
      <Router>
        <Switch>
          {/* Main homepage */}
          <Route path='/' exact>
            <Home setSignupData={setSignupData} />
          </Route>

          {/* Authenticate page */}
          <Route path='/authenticate/:type' exact>
            <Authenticate signupData={signupData} />
          </Route>

          {/* Main control panel for authed users */}
          <ProtectedRoute path='/controlpanel/:userid'>
            <ControlPanel />
          </ProtectedRoute>

          {/* 404 Route */}
          <Route>
            <Unmatched />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
