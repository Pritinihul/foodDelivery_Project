import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
         <Navbar />
    <div className="authContainer">
      <div className="authBox">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form>
          {isSignUp && (
            <input type="text" placeholder="Full Name" className="authInput" required />
          )}
          <input type="email" placeholder="Email" className="authInput" required />
          <input type="password" placeholder="Password" className="authInput" required />
          <button type="submit" className="authButton">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p onClick={toggleForm} className="toggleText">
          {isSignUp
            ? 'Already have an account? Login'
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;