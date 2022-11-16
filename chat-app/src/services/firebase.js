import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMWENLMdV6abSbRwM8T_Ki-c0vlYlvQlc",
    authDomain: "chat-app-bcc82.firebaseapp.com",
    projectId: "chat-app-bcc82",
    storageBucket: "chat-app-bcc82.appspot.com",
    messagingSenderId: "791511028135",
    appId: "1:791511028135:web:f5128a2f7172f7f4ba6682"
  };

//initialize the firebase app
initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()
const db = getFirestore()

//export the auth object
export { auth,db }