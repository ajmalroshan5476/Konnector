import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CometChatApp from './CometChat/CometChatApp';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import How from './Pages/How';
import Navbar from './components/navbar';
import LogoTitle from './components/LogoTitle';
import Registration from './Pages/Registration';
import WelcomeEditor from './Pages/WelcomeEditor';
import WelcomeCreator from './Pages/WelcomeCreator';
import ProtectedRoute from './auth/ProtectedRoute';
import ChatroomPage from './Pages/ChatroomPage'; // ✅ Newly added

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing-plans" element={<Pricing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/how-we-works" element={<How />} />
        <Route path="/registration" element={<Registration />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/welcome-editor" element={<WelcomeEditor />} />
          <Route path="/welcome-creator" element={<WelcomeCreator />} />
        </Route>

        {/* ✅ Chatroom Route (joins group then shows chat) */}
        <Route path="/chat/:roomId" element={<ChatroomPage />} />
      </Routes>
    </>
  );
};

export default App;



