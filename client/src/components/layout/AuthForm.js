import React, { useState, useEffect } from 'react';
import '../../css/AuthForm.css';
import InputBox from '../general/Input';
import Button from '../general/Button';
import Logo from '../../resources/BrandLogo.svg';
import { min_length, is_email } from '../../other/Algorithms';
import { useHistory, useParams } from 'react-router-dom';

export default function AuthForm({ signup, login, auth_errors, signupData }) {
  let { type } = useParams();
  const history = useHistory();
  const [mode, setMode] = useState(type);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: [],
    username: [],
    password: [],
  });

  useEffect(() => {
    setEmail('');
    setUsername('');
    setPassword('');
    setErrors({ email: [], username: [], password: [] });
  }, [mode]);

  useEffect(() => {
    setErrors(auth_errors);
  }, [auth_errors]);

  function authenticateHandler(e) {
    e.preventDefault();
    let is_errors = false;
    let temp_errors = { email: [], username: [], password: [] };

    setErrors(temp_errors);

    if (!min_length(email, 1)) {
      temp_errors.email.push("Don't leave empty.");
    }

    if (!is_email(email)) {
      temp_errors.email.push('Type in a valid email.');
    }

    if (!min_length(username, 1) && mode === 'signup') {
      temp_errors.username.push("Don't leave empty.");
    }

    if (!min_length(password, 8)) {
      temp_errors.password.push('Minimum 8 characters');
    }

    setErrors(temp_errors);

    Object.values(temp_errors).forEach((error) => {
      if (error.length !== 0) {
        is_errors = true;
      }
    });

    // Once data is valid
    if (!is_errors) {
      if (mode === 'signup') {
        signup(username, email, password);
      } else {
        login(email, password);
      }
    }
  }

  function switchMode(e, mode) {
    e.preventDefault();

    console.log(signupData);

    if (mode === 'signup' && Object.keys(signupData).length === 0) {
      return history.push(`/#start`);
    }

    setMode(mode);
  }

  return (
    <form className='AuthForm'>
      <div className='AuthForm-header'>
        <img src={Logo} alt='Brand logo' />
        <h2>Log in to manage and save progress</h2>
      </div>
      <div>
        <InputBox
          label='Email'
          type='email'
          placeholder='Enter your email...'
          value={email}
          onChange={setEmail}
          errors={errors.email}
          rounded={false}
        />
        {mode === 'signup' && (
          <InputBox
            label='Username'
            placeholder='Enter your username...'
            value={username}
            onChange={setUsername}
            errors={errors.username}
            rounded={false}
          />
        )}
        <InputBox
          label='Password'
          type='password'
          placeholder='Enter your password...'
          value={password}
          onChange={setPassword}
          errors={errors.password}
          rounded={false}
        />
        <Button larger onClick={(e) => authenticateHandler(e)} className='AuthForm-submit-btn'>
          {mode === 'signup' ? 'Sign up' : 'Login'}
        </Button>
        {mode === 'signup' ? (
          <p>
            Already have an account? <span onClick={(e) => switchMode(e, 'login')}>Sign in</span>
          </p>
        ) : (
          <p>
            Don't have an account? <span onClick={(e) => switchMode(e, 'signup')}>Sign up</span>
          </p>
        )}
      </div>
    </form>
  );
}
