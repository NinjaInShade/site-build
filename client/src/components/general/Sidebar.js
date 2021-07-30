import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../other/AuthContext';
import '../../css/Sidebar.css';

export default function Sidebar({ sites, openState, user }) {
  const { logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (openState) {
      document.querySelector('.sidebar').classList.remove('sidebar-closed');
    } else {
      document.querySelector('.sidebar').classList.add('sidebar-closed');
    }
  }, [openState]);

  function handleLogout() {
    logout()
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='sidebar'>
      <ul>
        <h3>Control Panel</h3>
        <NavLink to={`/controlpanel/${user.uid}`} activeClassName='sidebar-active' exact>
          <li>
            <span className='iconify' data-inline='false' data-icon='fa-solid:hammer'></span>
            <p>Sites overview</p>
          </li>
        </NavLink>
        {sites &&
          sites.map((site) => {
            return (
              <NavLink to={`/dashboard/${user.uid}/site/${site.id}`} activeClassName='sidebar-active' key={site.id}>
                <li>
                  <span className='iconify' data-inline='false' data-icon='ic:baseline-content-copy'></span>
                  <p>{site.title}</p>
                </li>
              </NavLink>
            );
          })}
      </ul>

      <ul>
        <h3>Profile</h3>
        <li>
          <button onClick={() => handleLogout()}>
            <span className='iconify' data-inline='false' data-icon='ic:twotone-log-out'></span>
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
