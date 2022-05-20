import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from '../components/Footer/Footer';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
