// Libraries
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../other/AuthContext';
import Navbar from '../components/layout/Navbar';
import axios from 'axios';
import AuthForm from '../components/layout/AuthForm';
import '.././css/Authenticate.css';

// ON SINGUP, if signupData is empty/incomplete for some reason, give error msg saying to go back to "/#start" and fill form

export default function Authenticate({ signupData }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setAuthToken, userData, setUserData } = useAuth();

  const [errors, setErrors] = useState({ email: [], username: [], password: [] });

  // CREATE NEW USER
  function create_user(username, email, password) {
    let temp_errors = { email: [], username: [], password: [] };

    axios
      .post('http://localhost:3000/auth/signup', {
        username,
        email,
        password,
        signupData,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthToken(result.token);
          setUserData(result.user);
          setLoggedIn(true);
        } else {
          temp_errors.password.push(result.error_message);
        }
      })
      .catch((e) => {
        temp_errors.password.push('An error occurred');
        console.log(e);
      });

    setErrors(temp_errors);
  }

  // LOGIN EXISTING USER
  function login_user(email, password) {
    let temp_errors = { email: [], username: [], password: [] };

    // axios
    //   .post("http://localhost:3000/auth/login", {
    //     email,
    //     password,
    //   })
    //   .then((result) => {
    //     if (result.status === 200) {
    //       setAuthToken(result.token);
    //       setUserData(result.user);
    //       setLoggedIn(true);
    //     } else {
    //       temp_errors.password.push(result.error_message);
    //     }
    //   })
    //   .catch((e) => {
    //     temp_errors.password.push("An error occurred");
    //     console.log(e);
    //   });

    setAuthToken({ token: 'sda24142r2f2rf2d3d', expiry: 15, date_created: Date.now() });
    setUserData({ id: 5, username: 'Leon michalak', email: 'bobob@gmail.com' });
    setLoggedIn(true);

    setErrors(temp_errors);
  }

  if (isLoggedIn) {
    return <Redirect to={`/controlpanel/${userData.id}`} />;
  }

  return (
    <>
      <Navbar />
      <section className='authenticate'>
        <AuthForm signup={create_user} login={login_user} auth_errors={errors} signupData={signupData} />
      </section>
    </>
  );
}
