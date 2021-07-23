// Libraries
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../other/AuthContext';
import Navbar from '../components/layout/Navbar';
import AuthForm from '../components/layout/AuthForm';
import '.././css/Authenticate.css';

// ON SINGUP, if signupData is empty/incomplete for some reason, give error msg saying to go back to "/#start" and fill form

export default function Authenticate({ signupData }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const { signup } = useAuth();

  const login = 'TEMP';

  if (isLoggedIn) {
    return <Redirect to={`/controlpanel`} />;
  }

  return (
    <>
      <Navbar />
      <section className='authenticate'>
        <AuthForm signup={signup} login={login} signupData={signupData} />
      </section>
    </>
  );
}
