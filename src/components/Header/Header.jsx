import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const loginStatus = useSelector((state) => state.user.status);
  const { firstName } = useSelector((state) => state.user);
  const logout = useSelector((state) => state.user.logout);
  const dispatch = useDispatch();

  const HeaderContent = () => {
    return loginStatus === 'succeeded' ? (
      <div>
        <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
        <Link onClick={() => dispatch(logout)} className="main-nav-item" to="/">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    ) : (
      <div>
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    );
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <HeaderContent />
    </nav>
  );
};

export default Header;
