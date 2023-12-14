// SignInSignUpModal.jsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ImageCard2 from './ImageCard2'; // Adjust the path to your ImageCard component

const SignInSignUpModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
      <div className="flex bg-white rounded-xl border-2 border-black justify-center items-center">
        <div style={{ marginLeft: '20px', marginTop: '70px' }}>
          <ImageCard2 />
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative ml-10">
          <button onClick={onClose} className="absolute top-0 right-0 m-4 text-black text-2xl">
            <FaTimes />
          </button>
          <form className="space-y-6">
            {isSignUp ? (
              // Sign-up form structure
              <>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-1/3 px-4 py-2 border-2 border-black rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-2/3 px-4 py-2 border-2 border-black rounded-lg"
                  />
                </div>
                {/* Add additional sign-up fields here */}
              </>
            ) : (
              // Sign-in form structure
              <>
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
                <div className="text">
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Forgotten password?
                  </a>
                </div>
              </>
            )}
            <div className="flex justify-center items-center h-full">
            <button
              type="submit"
              className="w-auto bg-black text-white px-4 py-2 rounded-lg"
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">{isSignUp ? 'Already have an account?' : 'New to the site?'}</p>
            <button
              onClick={toggleForm}
              className="w-full bg-white text-black px-4 py-2 font-bold rounded-lg border-2 border-black"
            >
              {isSignUp ? 'Sign In' : 'Create new account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpModal;
