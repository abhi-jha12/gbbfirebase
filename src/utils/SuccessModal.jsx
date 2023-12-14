import React from 'react';

const SuccessModal = ({ username, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white p-8 rounded-xl border-black border shadow-lg max-w-2xl w-full m-4">
    <h3 className="text-2xl font-bold uppercase tracking-wide text-center mb-4">Congratulations</h3>
    <div className="text-center">
      <p className="text-lg font-semibold mb-4">{username}</p>
      <p className="text-lg mb-4">Your account has been successfully created & verified</p>
      <button className="mx-5 px-4 py-1 rounded-lg border-2 border-black text-black hover:text-black font-overpass focus:outline-none">Verified</button>
      <p className="text-sm mb-4">You get 50 reward points on creating your account successfully.</p>
      <button onClick={onClose} className="mx-5 px-4 py-1 rounded-lg border-2 border-black text-white bg-black hover:text-black font-overpass focus:outline-none">Continue</button>
    </div>
    <p className="text-xs text-center mt-6 px-6">
      To be part of the change for a good impact on earth<br/>
      Embrace it- for, even the smallest actions can lead to monumental change
    </p>
  </div>
</div>

  );
};

export default SuccessModal;
