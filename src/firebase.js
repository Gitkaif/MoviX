
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDsfp1HgtYZ8NbP_zuX-vPEXsvksL0WNTI",
  authDomain: "movi-zz.firebaseapp.com",
  projectId: "movi-zz",
  storageBucket: "movi-zz.firebasestorage.app",
  messagingSenderId: "634807753975",
  appId: "1:634807753975:web:b0d3e23817f27c950c07f2",
  measurementId: "G-C1VRTSRPB2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
