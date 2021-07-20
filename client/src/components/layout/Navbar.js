// Libraries
import React, { useState } from 'react';
import BrandLogo from '../../resources/Logo.png';
import { useAuth0 } from '@auth0/auth0-react';

import '../../css/Buttons.css';
import '../../css/Hamburger.css';
import '../../css/Navbar.css';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const { loginWithRedirect } = useAuth0();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a className='navbar-brand-container' href='/'>
          <img src={BrandLogo} alt='Brand logo' className='navbar-logo' />
          <strong className='navbar-brand'>SiteBuild</strong>
        </a>
        <div className='navbar-links'>
          <a href='/#start' className='btn btn-secondary'>
            Get started
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              id='navbar-btn-svg'
            >
              <path
                d='M1.96275 0.316956C2.38075 0.724956 6.46475 5.01196 6.46475 5.01196C6.5706 5.11409 6.65479 5.2365 6.71229 5.37189C6.7698 5.50728 6.79943 5.65286 6.79943 5.79996C6.79943 5.94705 6.7698 6.09263 6.71229 6.22802C6.65479 6.36341 6.5706 6.48582 6.46475 6.58796C6.46475 6.58796 2.38075 10.877 1.96275 11.283C1.54475 11.691 0.792749 11.719 0.347749 11.283C-0.0982512 10.849 -0.133251 10.242 0.347749 9.70896L4.09475 5.80096L0.347749 1.89296C-0.133251 1.35996 -0.0982512 0.751956 0.347749 0.316956C0.792749 -0.119044 1.54475 -0.0920442 1.96275 0.316956Z'
                fill='#099268'
              />
            </svg>
          </a>
          <button onClick={() => loginWithRedirect()} className='btn btn-primary'>
            Log in
          </button>
          <svg
            className={`ham hamRotate ham1 ${active && 'active'}`}
            viewBox='0 0 100 100'
            width='50'
            onClick={() => setActive(!active)}
          >
            <path
              className='line top'
              d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40'
            />
            <path className='line middle' d='m 30,50 h 40' />
            <path
              className='line bottom'
              d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40'
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
