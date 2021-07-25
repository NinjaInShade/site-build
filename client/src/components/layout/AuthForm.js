import React, { useState, useEffect } from 'react';
import { min_length, is_email } from '../../other/Algorithms';
import { useHistory, useParams } from 'react-router-dom';
import InputBox from '../general/Input';
import Logo from '../../resources/Logo.png';
import '../../css/AuthForm.css';
import '../../css/Buttons.css';

export default function AuthForm({ signup, login, signupData }) {
  let { type } = useParams();
  const history = useHistory();
  const [mode, setMode] = useState(type);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState();
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
        setLoading(true);

        signup(email, password)
          .then((user) => {
            setLoading(false);

            history.push(`/controlpanel/${user.user.uid}`);
          })
          .catch((err) => {
            setLoading(false);

            setAuthError(err.message);
          });
      } else {
        setLoading(true);
        login(email, password)
          .then((user) => {
            setLoading(false);

            history.push(`/controlpanel/${user.user.uid}`);
          })
          .catch((err) => {
            setLoading(false);

            setAuthError(err.message);
          });
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
        <button
          disabled={loading}
          onClick={(e) => authenticateHandler(e)}
          className='AuthForm-submit-btn btn btn-primary'
        >
          {mode === 'signup' ? 'Sign up' : 'Login'}
        </button>
        {authError && <p className='inputbox-error'>* {authError} *</p>}
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
