import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCi6fMGKkkVdoehL9ZpSM9cXoYtJzryR9M",
  authDomain: "auth-877dd.firebaseapp.com",
  projectId: "auth-877dd",
  storageBucket: "auth-877dd.firebasestorage.app",
  messagingSenderId: "577942496692",
  appId: "1:577942496692:web:5366f3705abecadff73ee1",
  measurementId: "G-BBXKH2LWRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app;