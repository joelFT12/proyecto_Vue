// import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyCP_FBEy9t7iff9DC8N1UTAHEqj__wKWcc',
  authDomain: 'ebaycellphone-a2b19.firebaseapp.com',
  projectId: 'ebaycellphone-a2b19',
  storageBucket: 'ebaycellphone-a2b19.appspot.com',
  messagingSenderId: '986233819224',
  appId: '1:986233819224:web:64c8cfe8d188f4a351ba2d'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db }
