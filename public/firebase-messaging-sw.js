// Import the Firebase scripts required for Firebase Cloud Messaging (FCM)
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

// Firebase configuration object for your project
const firebaseConfig = {
  apiKey: "AIzaSyB0MV5kwT-Le4dzXRhywMcbRcRn-HAmFIc",
  authDomain: "webpushnotification-cc01d.firebaseapp.com",
  projectId: "webpushnotification-cc01d",
  storageBucket: "webpushnotification-cc01d.appspot.com",
  messagingSenderId: "254464963916",
  appId: "1:254464963916:web:57f03c582480038ba68be9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  
  // Extract notification data from the payload
  const notificationTitle = payload.notification?.title || "No title";
  const notificationOptions = {
    body: payload.notification?.body || "No body",
    icon: payload.notification?.image || "/default-icon.png",  // Provide a default icon if not available
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});