import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import LoginValidation from './LoginValidation.jsx';
import img100 from './images/loge.jpeg'
import img101 from './images/yo.jpeg'
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = LoginValidation(values);
    setErrors(err);
    if (err.email === '' && err.password === '') {
      axios
        .post('http://localhost:8082/login', values)
        .then((res) => {
          if (res.data.errors) {
            setBackendError(res.data.errors);
          } else {
            setBackendError({});
            if (res.data === 'Success') {
              navigate('/home');
            } else {
              alert('No record existed');
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='container-fluid p-0'>
      <div className='row m-0'>
        {/* Half Page Image */}
        <div className='col-md-6 p-0'>
          <img
            src={img100}
            alt='Background'
            className='w-100 vh-100'
          />
        </div>

        {/* Half Page Login */}
        <div className='col-md-6 d-flex justify-content-center align-items-center bg-secondary vh-50'>
          <div className='web login-container'>
          
            <h2 className='mb-1'>Sign-In</h2>
            {backendError && <p className='text-danger'>{backendError.msg}</p>}
            <form action='' onSubmit={handleSubmit}>
              <div className='qet form-group'>
                <label htmlFor='email'>
                  <strong>Email</strong>
                </label>
                <input
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  onChange={handleInput}
                  className={`form-control ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                />
                {errors.email && (
                  <span className='text-danger'>{errors.email}</span>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='password'>
                  <strong>Password</strong>
                </label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  name='password'
                  onChange={handleInput}
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                />
                {errors.password && (
                  <span className='text-danger'>{errors.password}</span>
                )}
              </div>
              <button type='submit' className='btn btn-success btn-block'>
                Log in
              </button>
              <p className='mt-3'>
                You agree to our terms and policies
              </p>
              <Link
                to='/signup'
                className='btn btn-default btn-block border bg-light text-decoration-none'
              >
                Create Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
