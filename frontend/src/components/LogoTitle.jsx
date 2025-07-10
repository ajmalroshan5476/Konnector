import React from 'react';
import logo from '../assets/logo_konnecta.png';
import { Link } from 'react-router-dom';

const LogoTitle = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
        <img src={logo} alt="Konnecta Logo" className="h-32 md:h-40 lg:h-48" />

        <div className="border-2 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900  p-6 shadow-xl">





          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primaryText">
            🔥 Welcome to Konnecta
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-primaryText px-4 max-w-2xl">
            Where creators 🧠🎧 vibe, editors ⚡✂️ thrive, and content 🔥📺 comes alive.
          </p>
        </div>
          <Link to='/registration'>
            <button className="border-2 border-yellow-300 px-6 py-3 mt-4 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-300 font-semibold hover:bg-yellow-300 hover:text-primarybg transition-all duration-300 cursor-pointer">
              🚀 Let’s Get This Collab Started
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default LogoTitle;

