import React, { useState } from 'react';

const WelcomeEditor = () => {
  const [createPvtRoom, setCreatePvtRoom] = useState(null);
  const [joinCode, setJoinCode] = useState(null);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-950 flex items-center justify-center">
      {joinCode !== 'joinWithCode' && createPvtRoom !== 'PvtRoom' && (
        <div className="flex items-center justify-center flex-col">
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-3 hover:from-amber-500 hover:to-yellow-600 transition duration-300 shadow-lg"
            onClick={() => setCreatePvtRoom('PvtRoom')}
          >
            🎬 Start Collab with Creator
          </button>
          <button className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3 hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg mt-5">
            🌐 Drop a Public Chatroom for Editors
          </button>
        </div>
      )}

      {createPvtRoom === 'PvtRoom' && joinCode !== 'joinWithCode' && (
        <div className="flex items-center justify-center flex-col">
          <button className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold px-8 py-3 hover:from-amber-500 hover:to-yellow-600 transition duration-300 shadow-lg">
            💬 Start a Fresh Room
          </button>
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-3 hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg mt-5"
            onClick={() => setJoinCode('joinWithCode')}
          >
            🔑 Got the Invite Code? Let’s Go 🚀
          </button>
        </div>
      )}

      {joinCode === 'joinWithCode' && (
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            required
            placeholder="Enter invite code and let’s roll 🚀"
            className="w-72 p-3 rounded-xl text-black font-medium shadow-md bg-amber-400 border-amber-50"
          />
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold px-8 py-3 hover:from-green-500 hover:to-emerald-600 transition duration-300 shadow-lg"
          >
            🎯 Lock In & Join
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeEditor;


