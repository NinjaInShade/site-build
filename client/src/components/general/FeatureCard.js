import React from 'react';

import '../../css/Buttons.css';
import '../../css/Feature-card.css';

export default function FeatureCard({ odd, title, description, icon }) {
  return (
    <div className={`feature-card ${odd && 'feature-card-odd'}`}>
      <div className='feature-card-circle'>{icon}</div>
      <em className='feature-card-title'>{title}</em>
      <p className='feature-card-description'>{description}</p>
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
    </div>
  );
}
