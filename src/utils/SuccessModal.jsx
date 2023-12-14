import React from 'react';

const SuccessModal = ({ username, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg border-black border-2 shadow-md max-w-md w-full">
        <h3 className="text-lg font-semibold">CONGRATULATIONS</h3>
        <p className="my-4">USER NAME</p>
        <p className="text-sm mb-4">{username}</p>
        <p className="text-sm mb-4">YOUR ACCOUNT HAS BEEN SUCCESSFULLY CREATED & VERIFIED</p>
        <button className="bg-blue-500 text-white rounded px-6 py-2 my-2">VERIFIED</button>
        <p className="text-xs my-4">You get 50 reward points on creating your account successfully.</p>
        <button onClick={onClose} className="bg-gray-200 text-black rounded px-6 py-2 my-2">CONTINUE</button>
      </div>
    </div>
  );
};

export default SuccessModal;
