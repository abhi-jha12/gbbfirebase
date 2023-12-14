// App.jsx
import React, { useState } from 'react';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Card from './components/Cards';
import Button from './components/Button';
import ImageCard from './utils/ImageCard';
import SignInSignUpModal from './utils/SignInSignUpModal'; // Make sure this path is correct

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col">
      {/* <Header onSignInClick={() => setShowModal(true)} />*/}
      <Header2 />
      <main className="flex-grow">
        <div className="flex justify-between items-center my-16">
          <div>
            <Card 
              content="Transform your shopping experience into a rewarding odyssey"
            />
            <p className='font-Overpass mx-3 font-semibold text-2xl'>Embrace the revolutionary fusion of fashion and <br />technology with AR and virtual try-on</p>
            
          </div>
          <ImageCard />
          
        </div>
        <div className="flex  justify-center space-x-4 my-4">
              <Button text="LOGIN  /  SIGNUP" onClick={() => {setShowModal(true)}} variant="primary" />
              
        </div>
        <div className="flex  justify-center space-x-4 my-4">
        <p className='font-Overpass '>Login / Sign up to unleash the revolutionary fusion where fashion and technology meets sustainability </p>
        </div>
      </main>
      <Footer />
      {showModal && <SignInSignUpModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
