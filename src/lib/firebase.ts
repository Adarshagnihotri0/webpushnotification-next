import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

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

export { messaging };
