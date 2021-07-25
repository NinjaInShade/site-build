import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../other/AuthContext';
import Navbar from '../components/layout/Navbar';
import AuthForm from '../components/layout/AuthForm';
import '.././css/Authenticate.css';

export default function Authenticate({ signupData }) {
  const { currentUser, signup, login } = useAuth();

  return !signupData && !currentUser ? (
    <Redirect to={`/controlpanel/${currentUser.uid}`} />
  ) : (
    <>
      <Navbar />
      <section className='authenticate'>
        <AuthForm signup={signup} login={login} signupData={signupData} />
      </section>
    </>
  );
}
