import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAMWENLMdV6abSbRwM8T_Ki-c0vlYlvQlc",
    authDomain: "chat-app-bcc82.firebaseapp.com",
    projectId: "chat-app-bcc82",
    storageBucket: "chat-app-bcc82.appspot.com",
    messagingSenderId: "791511028135",
    appId: "1:791511028135:web:f5128a2f7172f7f4ba6682"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)


export default firebase