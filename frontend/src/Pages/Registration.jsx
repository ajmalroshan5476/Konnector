import React from 'react';

const Registration = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
      <div className="flex flex-col space-y-4">
        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium px-6 py-2 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition duration-300">
          ✂️ Join as Editor
        </button>
        <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium px-6 py-2 rounded-lg hover:from-amber-500 hover:to-yellow-600 transition duration-300">
          📹 Join as Creator
        </button>
      </div>
    </div>
  );
};

export default Registration;


