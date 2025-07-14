import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import CometChatApp from '../CometChat/CometChatApp';

const ChatroomPage = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState(null);

  const joinCode = location.state?.joinCode || ""; // 👈 pass this during navigation

  useEffect(() => {
    const joinGroup = async () => {
      try {
        await CometChat.joinGroup(roomId, CometChat.GROUP_TYPE.PASSWORD, joinCode);
        console.log('✅ Joined group:', roomId);
        setJoined(true);
      } catch (err) {
        console.error('❌ Failed to join group:', err);
        setError(err.message || 'Failed to join group');
      }
    };

    joinGroup();
  }, [roomId, joinCode]);

  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!joined) return <div className="text-white text-center mt-10">Joining room...</div>;

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CometChatApp />
    </div>
  );
};

export default ChatroomPage;
