import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom';
import Home from './pages/Home.page';
import Authentication from './pages/Authentication.page';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/auth' element={
          <Authentication>
            {isLogin ? (
              <LoginForm onSwitchToRegister={handleSwitchToRegister} />
            ) : (
              <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
            )}
          </Authentication>
        } />
        <Route path='/login' element={<Navigate to="/auth" />} />
        <Route path='/register' element={<Navigate to="/auth" replace state={{ isLogin: false }} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

