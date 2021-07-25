// Libraries
import React, { useEffect, useState } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

// CSS
import '../css/ControlPanel.css';

// Components
import Sidebar from '../components/general/Sidebar';
import ProtectedRoute from '../other/ProtectedRoute';
import SitesOverview from '../components/layout/SitesOverview';
import SiteDashboard from '../components/layout/SiteDashboard';

// Context
import { useAuth } from '../other/AuthContext';

// Other
import { colours_array } from '../other/colours';
import { dummy_topic_data } from '../other/dummy_data';

export default function ControlPanel() {
  const [sites, setSites] = useState([]);
  const [open, setOpen] = useState(true);

  const { currentUser } = useAuth();
  let { path } = useRouteMatch();

  console.log(currentUser);

  useEffect(() => {
    console.log(`Send fetch request to get data for user #${currentUser.uid} sites`);
    console.log(
      'Save this data to the sites state and send it down to any component that needs it, like siteDashboard.'
    );

    setSites([
      {
        id: 1,
        title: 'PortfoliosCorp',
        type: 'Portfolio site',
        intendedAudience: 'adults',
        progress: '27%',
        colour: colours_array[0].s500,
        data: dummy_topic_data,
      },
      {
        id: 2,
        title: 'DevBlog',
        type: 'Blog site',
        intendedAudience: 'adults',
        progress: '39%',
        colour: colours_array[2].s500,
        data: dummy_topic_data,
      },
      {
        id: 3,
        title: 'TeslaBlog',
        type: 'Blog site',
        intendedAudience: 'adults',
        progress: '75%',
        colour: colours_array[4].s500,
        data: dummy_topic_data,
      },
      {
        id: 4,
        title: 'Redbull',
        type: 'Product site',
        intendedAudience: 'all',
        progress: '52%',
        colour: colours_array[8].s500,
        data: dummy_topic_data,
      },
    ]);
  }, [currentUser.uid]);

  return (
    <section className='ControlPanel'>
      <Sidebar sites={sites} openState={open} />
      <section>
        <div>
          <button onClick={() => setOpen(!open)}>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <Switch>
          <ProtectedRoute path={`${path}/site/:siteid`} component={SiteDashboard} user={currentUser} sites={sites} />
          <ProtectedRoute path={`${path}/`} component={SitesOverview} exact user={currentUser} sites={sites} />
        </Switch>
      </section>
    </section>
  );
}
