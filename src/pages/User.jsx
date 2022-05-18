import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../components/Account/Account';
import Header from '../components/Header/Header';
import { getUserProfile } from '../features/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(getUserProfile({ token }));
  }, [dispatch, token]);
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="amount"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="amount"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="amount"
          description="Current Balance"
        />
      </main>
    </>
  );
};
export default User;
