import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './other/AuthContext';
import ProtectedRoute from './other/ProtectedRoute';
import Home from './pages/Home';
import Authenticate from './pages/Authenticate';
import Dashboard from './pages/Dashboard';
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
//     intendedaudience
//     ...
//   }]
// }

// TODO: Make navbar responsive with a sidebar menu
// TODO: Make dropdown absolute so window height doesn't change.
// TODO: Redesign control panel
// TODO: Code control panel - sidebar component & project card component
// TODO: control panel should load sites data into state on component mount ( useEffect hook )
// TODO: Look into how to refresh the token if user is active
// TODO: When a sites progress is saved( so more/less boxes are checked ) then recalculate and update the progress % in db

function App() {
  // Data if new user
  const [signupData, setSignupData] = useState(undefined);

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/' exact>
            <Home setSignupData={setSignupData} />
          </Route>

          <Route path='/authenticate/:type' exact>
            <Authenticate signupData={signupData} setSignupData={setSignupData} />
          </Route>

          <ProtectedRoute path='/dashboard/:userid' exact>
            <Dashboard />
          </ProtectedRoute>

          <Route>
            <Unmatched />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
