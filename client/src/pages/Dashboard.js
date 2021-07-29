import React, { useEffect, useState } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../other/AuthContext';
import { sites as sites_data } from '../other/dummy_data';
import Sidebar from '../components/general/Sidebar';
import ProtectedRoute from '../other/ProtectedRoute';
import SitesOverview from '../components/layout/SitesOverview';
import SiteDashboard from '../components/layout/SiteDashboard';
import '../css/ControlPanel.css';

export default function Dashboard() {
  const [sites, setSites] = useState(sites_data);

  const [open, setOpen] = useState(true);

  const { currentUser } = useAuth();
  let { path } = useRouteMatch();

  return (
    <section className='ControlPanel'>
      <Sidebar sites={sites} openState={open} user={currentUser} />
      <section>
        <div>
          <button onClick={() => setOpen(!open)}>
            <i className='fas fa-bars hamburger'></i>
          </button>
        </div>
        <Switch>
          <ProtectedRoute path={`${path}/site/:siteid`}>
            <SiteDashboard user={currentUser} sites={sites} />
          </ProtectedRoute>
          <ProtectedRoute path={`${path}/`} exact>
            <SitesOverview user={currentUser} sites={sites} />
          </ProtectedRoute>
        </Switch>
      </section>
    </section>
  );
}
