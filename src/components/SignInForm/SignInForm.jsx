import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/userSlice';

/**
 * Component for rendering signin form
 *
 * @component
 */
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (loginStatus === 'succeeded') {
      navigate('/user');
    }
  });

  /**
   * Component for rendering error message if form is invalid
   *
   * @component
   */
  const ErrorMsg = () => {
    if (loginStatus === 'failed') {
      return <p className="sign-in-err">Invalid Email or Password !</p>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // Get form values
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  return loginStatus === 'loading' ? (
    <main className="main bg-dark">
      <div className="spinner-wrapper">
        <div className="spinner" />
      </div>
    </main>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              value={email}
              onChange={onEmailChanged}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChanged}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
          <ErrorMsg />
        </form>
      </section>
    </main>
  );
};

export default SignInForm;
