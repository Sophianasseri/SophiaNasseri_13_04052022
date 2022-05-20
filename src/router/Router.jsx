import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from '../components/Footer/Footer';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import SignInForm from '../components/SignInForm/SignInForm';
import Header from '../components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
