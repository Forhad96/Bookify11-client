import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKcvaeFoUfF2QosBpuHE7GcbIYTh3Z-Kw",
  authDomain: "bookify007.firebaseapp.com",
  projectId: "bookify007",
  storageBucket: "bookify007.appspot.com",
  messagingSenderId: "703774569253",
  appId: "1:703774569253:web:27fc5902495d79731860cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
