import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

if (env.VITE_USE_EMULATOR === "true") {
  connectFirestoreEmulator(db, "localhost", 8080);
}

export { db };