import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyDX30xjRUilCjiNkFhdtBcz5oLeHitFX7Y",
  authDomain: "nowna-6c45a.firebaseapp.com",
  projectId: "nowna-6c45a",
  storageBucket: "nowna-6c45a.appspot.com",
  messagingSenderId: "92261510019",
  appId: "1:92261510019:web:c599bc87670b974b24a4b6",
  measurementId: "G-ZKG8KYMGB5",
}

export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebaseApp)

export default firebaseApp;