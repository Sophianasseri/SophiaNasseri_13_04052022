import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from '../components/Account/Account';
import EditProfile from '../components/EditProfile/EditProfile';
import { getUserProfile } from '../features/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const { firstName, lastName } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstName) {
      dispatch(getUserProfile({ token }));
    } else if (!token) {
      return navigate('/sign-in');
    }
  });
  return (
    <>
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
