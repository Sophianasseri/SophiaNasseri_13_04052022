import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './userSlice';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.user.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (loginStatus === 'succeeded') {
    navigate('/user');
  } else if (loginStatus === 'loading') {
    return <p>Loading...</p>;
  }

  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={onEmailChanged}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChanged}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default Form;
