import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAENYNKhk65BxeMPc3wvprBZbpJrG4YshY",
  authDomain: "weaudit-quiz-temp-storage.firebaseapp.com",
  projectId: "weaudit-quiz-temp-storage",
  storageBucket: "weaudit-quiz-temp-storage.appspot.com",
  messagingSenderId: "561178539585",
  appId: "1:561178539585:web:ff0373bc6eda94f505b8c0"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;