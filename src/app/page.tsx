// src/app/page.tsx
'use client'; // Add this at the top

import { useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0MV5kwT-Le4dzXRhywMcbRcRn-HAmFIc',
  authDomain: 'webpushnotification-cc01d.firebaseapp.com',
  projectId: 'webpushnotification-cc01d',
  storageBucket: 'webpushnotification-cc01d.appspot.com',
  messagingSenderId: '254464963916',
  appId: '1:254464963916:web:57f03c582480038ba68be9',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const Home = () => {
  useEffect(() => {
    async function requestPermission() {
      if (typeof window !== 'undefined') { // Ensure this code runs only in the browser
        try {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            const token = await getToken(messaging, {
              vapidKey: 'BK5wCD8b5Vm4b3soHFFg1x5Ik_4LFTJpgwLZ4WQpzgcF73-X-OScahbY5OWSrs6I3ui2xLjM-UYIWHFc8iZyNSY',
            });
            if (token) {
              console.log('Token Gen:', token);
            } else {
              console.warn('No registration token available.');
            }
          } else if (permission === 'denied') {
            alert('You denied the permission.');
          }
        } catch (error) {
          console.error('Error requesting permission or getting token:', error);
        }
      }
    }

    requestPermission();
  }, []);

  return <div>Home Page</div>;
};

export default Home;
