import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { auth } from '../firebaseConfig'; // Adjust if necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import SuccessModal from './SuccessModal'; 
import ImageCard2 from './ImageCard2'; // Adjust the path to your ImageCard component

const SignInSignUpModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, country, phoneNumber } = formData;

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Add additional user information to your database if needed
        // For example, save firstName, lastName, country, phoneNumber to Firestore
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setShowSuccessOverlay(true); // Show success overlay
      setErrorMessage(''); // Clear any previous error messages
      setTimeout(() => {
        setShowSuccessOverlay(false); // Optionally hide the overlay after some time
        onClose(); // Close the modal
      }, 8000); // Close the modal on successful sign in/sign up
    } catch (error) {
      // Handle errors here, such as displaying a notification
      console.error("Authentication error:", error.message);
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
       {showSuccessOverlay && (
      <SuccessModal username={formData.firstName || 'User'} onClose={() => {
        setShowSuccessOverlay(false);
        onClose(); // Close the modal
      }} />
    )}

      <div className="flex bg-white rounded-xl border-2 border-black justify-center items-center">
        <div style={{ marginLeft: '20px', marginTop: '70px' }}>
          <ImageCard2 />
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative ml-10">
          <button onClick={onClose} className="absolute top-0 right-0 m-4 text-black text-2xl">
            <FaTimes />
          </button>
          {errorMessage && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
              <strong className="font-bold">Error! </strong>
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp ? (
              // Sign-up form structure
              <>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-lg"
                    onChange={handleChange}
                    value={formData.firstName}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Surname"
                    className="w-1/2 px-4 py-2 border-2 border-black rounded-lg"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  onChange={handleChange}
                  value={formData.email}
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="w-1/3 px-4 py-2 border-2 border-black rounded-lg"
                    onChange={handleChange}
                    value={formData.country}
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    className="w-2/3 px-4 py-2 border-2 border-black rounded-lg"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                  />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  onChange={handleChange}
                  value={formData.password}
                />
              </>
            ) : (
              // Sign-in form structure
              <>
                <input
                  type="text"
                  name="email"
                  placeholder="Email address or phone number"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                  onChange={handleChange}
                  value={formData.password}
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
