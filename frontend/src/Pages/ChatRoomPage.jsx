import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import CometChatApp from '../CometChat/CometChatApp';

const ChatroomPage = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const joinCode = location.state?.joinCode || '';
  
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!joinCode) {
      setError("❌ Join code missing. Please use a valid invite link.");
      return;
    }

    const joinGroup = async () => {
      try {
        await CometChat.joinGroup(roomId, CometChat.GROUP_TYPE.PASSWORD, joinCode);
        console.log('✅ Joined group:', roomId);
        setJoined(true);
      } catch (err) {
        if (err?.code === 'ERR_ALREADY_JOINED') {
          console.warn("⚠️ Already a member of this group.");
          setJoined(true);
        } else {
          console.error('❌ Failed to join group:', err);
          setError(err.message || 'Failed to join group');
        }
      }
    };

    joinGroup();
  }, [roomId, joinCode]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <div className="text-red-500 text-center text-lg">{error}</div>
      </div>
    );
  }

  if (!joined) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <div className="text-white text-center text-lg animate-pulse">Joining room...</div>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CometChatApp />
    </div>
  );
};

export default ChatroomPage;

