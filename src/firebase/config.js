import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALvxKESSvhq6Kf-5x3zrbp8bF--_Q85tE",
  authDomain: "movix-01.firebaseapp.com",
  projectId: "movix-01",
  storageBucket: "movix-01.firebasestorage.app",
  messagingSenderId: "841049833785",
  appId: "1:841049833785:web:ca57f32991d3a38fc9a8e8",
  measurementId: "G-ZMXQWXX1E8"
};

// Initialize Firebase
let app;
let auth;
let db;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  
  // Initialize Firebase Analytics (only in browser environment)
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

export { auth, db, analytics };
export default app;
