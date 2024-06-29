// SignIn.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext/AuthContext';

function SignIn() {
  const navigate = useNavigate();
  const { setLoginValid } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkButtonStatus(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkButtonStatus(email, e.target.value);
  };

  const checkButtonStatus = (inputEmail, inputPassword) => {
    const isEmailValid = inputEmail === 'fkvesi00@fesb.hr';
    const isPasswordValid = inputPassword === '123@456@789@';

    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only navigate if the form is valid
    if (!isButtonDisabled) {
      // Set login state to true when successful login
      setLoginValid(true);
      // Redirect to AdminPage
      navigate('/adminPage');
    }
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden flex justify-center items-center h-screen p-4 m-4">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`btn btn-ghost normal-case text-xl ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isButtonDisabled}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
