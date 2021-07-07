// Libraries
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Heading from '../components/layout/Heading';
import Seperator from '../components/layout/Seperator';
import Demo from '../components/layout/Demo';
import Beginning from '../components/layout/Beginning';
import Features from '../components/layout/Features';
import Footer from '../components/layout/Footer';
import Illustration from '../resources/header illustration.png';
import { useAuth } from '../other/AuthContext';
import { Redirect } from 'react-router-dom';

import '../css/Home-header.css';
import '../css/Buttons.css';

export default function Home({ setSignupData }) {
  const { userData, authToken } = useAuth();

  if (authToken.token) {
    return <Redirect to={`/controlpanel/${userData.id}`} />;
  }

  return (
    <>
      <Navbar />
      <header className='home-header'>
        <div className='home-header-container'>
          <div>
            <h1 className='home-header-title'>
              <span>Power up</span> your web dev workflow!
            </h1>
            <p className='home-header-lead'>
              A <span>free</span> tool to help and guide you through developing a website. Site builder gives you
              suggestions so your site is left polished, categorizing items by priority and linking resources for that
              item.
            </p>
            <a href='/#start' className='btn btn-primary'>
              Get started <span>- it's free</span>
            </a>
          </div>
          <img src={Illustration} alt='Illustration of phone with checklists' className='home-header-img' />
        </div>
      </header>
      {/* <Heading /> */}
      {/* <Seperator /> */}
      {/* <Demo /> */}
      {/* <Beginning setSignupData={setSignupData} /> */}
      {/* <Features /> */}
      {/* <Footer /> */}
    </>
  );
}
