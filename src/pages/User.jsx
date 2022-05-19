import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../components/Account/Account';
import EditProfile from '../components/EditProfile/EditProfile';
import Header from '../components/Header/Header';
import { getUserProfile } from '../features/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const isAuth = useSelector((state) => state.user.isAuth);
  const { firstName, lastName } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuth) {
      dispatch(getUserProfile({ token }));
    }
  }, [dispatch, token, isAuth]);

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <EditProfile firstNameData={firstName} lastNameData={lastName} />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
};
export default User;
