import css from '../SignUpForm/SignUpForm.module.css';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/auth/selectors';

import { Loader } from 'components/Loader/Loader';

function SignUpForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.header}>{isLoginForm ? 'Log In' : 'Sign Up'}</h2>
        {isLoginForm ? null : (
          <label className={css.label}>
            <span className={css.name}>Name: </span>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder={'Enter your name'}
              ref={nameInputRef}
              required
            />
          </label>
        )}
        <label className={css.label}>
          <span className={css.name}>E-mail: </span>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder={'Enter your e-mail'}
            ref={emailInputRef}
            required
          />
        </label>
        <label className={css.label}>
          <span className={css.name}>Password: </span>
          <input
            className={css.input}
            type="password"
            name="password"
            minLength={7}
            placeholder={'Enter your password'}
            ref={passwordInputRef}
            required
          />
        </label>

        <button
          className={css.button}
          disabled={status === 'pending'}
          type="submit"
        >
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      {status === 'pending' && <Loader />}
    </>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
