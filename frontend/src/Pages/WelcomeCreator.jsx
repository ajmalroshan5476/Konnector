import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CometChat } from '@cometchat/chat-sdk-javascript';

const WelcomeCreator = () => {
  const [createPvtRoom, setCreatePvtRoom] = useState(null);
  const [joinCode, setJoinCode] = useState(null);
  const [roomId, setRoomId] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [inputRoomId, setInputRoomId] = useState('');
  const [inputJoinCode, setInputJoinCode] = useState('');

  const navigate = useNavigate();

  const handleCreatePrivateRoom = async () => {
    const timestamp = Date.now();
    const generatedRoomId = `creator-room-${timestamp}`;
    const generatedJoinCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const group = new CometChat.Group(
      generatedRoomId,
      'Creator Private Room',
      CometChat.GROUP_TYPE.PASSWORD,
      generatedJoinCode
    );

    try {
      await CometChat.createGroup(group);
      setRoomId(generatedRoomId);
      setInviteCode(generatedJoinCode);
      console.log("Navigating to room:", generatedRoomId, "with code:", generatedJoinCode);

      alert(`✅ Room Created!\nGroup ID: ${generatedRoomId}\nJoin Code: ${generatedJoinCode}`);

      // ✅ Navigate to the room page with group ID and join code
      navigate(`/chat/${generatedRoomId}`, {
        state: { joinCode: generatedJoinCode },
      });
    } catch (error) {
      console.error('Room creation failed:', error);
      alert('❌ Failed to create room. Please try again.');
    }
  };

  const handleJoinWithCode = () => {
    if (!inputRoomId || !inputJoinCode) {
      alert('❗ Please enter both Room ID and Join Code');
      return;
    }

    navigate(`/chat/${inputRoomId}`, {
      state: { joinCode: inputJoinCode },
    });
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-950 flex items-center justify-center">
      {joinCode !== 'joinWithCode' && createPvtRoom !== 'PvtRoom' && (
        <div className="flex items-center justify-center flex-col">
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold hover:from-amber-500 hover:to-yellow-600 transition duration-300 shadow-lg"
            onClick={() => setCreatePvtRoom('PvtRoom')}
          >
            🛠️ Link Up with Editor
          </button>
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold mt-5 hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg"
          >
            🌐 Create the Creator Lounge
          </button>
        </div>
      )}

      {createPvtRoom === 'PvtRoom' && joinCode !== 'joinWithCode' && (
        <div className="flex items-center justify-center flex-col space-y-4">
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold hover:from-amber-500 hover:to-yellow-600 transition duration-300 shadow-lg"
            onClick={handleCreatePrivateRoom}
          >
            💬 Start a Fresh Room
          </button>
          <button
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg"
            onClick={() => setJoinCode('joinWithCode')}
          >
            🔑 Got the Invite Code? Let’s Go 🚀
          </button>

          {roomId && inviteCode && (
            <div className="mt-4 text-white text-center">
              <p>✅ Room Created!</p>
              <p><strong>Group ID:</strong> {roomId}</p>
              <p><strong>Join Code:</strong> {inviteCode}</p>
            </div>
          )}
        </div>
      )}

      {joinCode === 'joinWithCode' && (
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter Group ID"
            value={inputRoomId}
            onChange={(e) => setInputRoomId(e.target.value)}
            className="w-72 p-3 rounded-xl text-black font-medium shadow-md bg-amber-400 border-amber-50"
          />
          <input
            type="text"
            placeholder="Enter Join Code"
            value={inputJoinCode}
            onChange={(e) => setInputJoinCode(e.target.value)}
            className="w-72 p-3 rounded-xl text-black font-medium shadow-md bg-amber-400 border-amber-50"
          />
          <button
            onClick={handleJoinWithCode}
            className="w-72 border p-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold px-8 py-3 hover:from-green-500 hover:to-emerald-600 transition duration-300 shadow-lg"
          >
            🎯 Lock In & Join
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeCreator;



