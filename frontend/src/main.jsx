import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from '@cometchat/chat-uikit-react';

import { setupLocalization } from './CometChat/utils/utils';
import { CometChatProvider } from './CometChat/context/CometChatContext';

// ✅ Replace with your actual CometChat keys
const COMETCHAT_CONSTANTS = {
  APP_ID: '2788189ca2441e63',
  REGION: 'in',
  AUTH_KEY: 'ffe2150c863881f5d3fd9d66176346576c2e3dff',
};

// ✅ Use a stable test UID from the list
const UID = 'cometchat-uid-1'; // Change to uid-2/3/4/5 for others

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(uiKitSettings).then(() => {
  setupLocalization();

  CometChatUIKit.getLoggedinUser().then((user) => {
    if (!user) {
      CometChatUIKit.login(UID)
        .then((user) => {
          console.log('✅ Login successful:', user);
          createRoot(document.getElementById('root')).render(
            <CometChatProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CometChatProvider>
          );
        })
        .catch((error) => {
          console.error('❌ Login failed:', error);
          alert('Login failed. Please check UID and CometChat credentials.');
        });
    } else {
      console.log('🔐 Already logged in as:', user);
      createRoot(document.getElementById('root')).render(
        <CometChatProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CometChatProvider>
      );
    }
  });
});


