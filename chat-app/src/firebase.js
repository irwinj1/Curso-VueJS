import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import {ref,onUnmounted,computed} from 'vue'
firebase.initializeApp({
    apiKey: "AIzaSyDGqAG5AQcE-MHiW3wr8iQeG6ly71mbrCc",
  authDomain: "chatapp-d0acd.firebaseapp.com",
  databaseURL: "https://chatapp-d0acd-default-rtdb.firebaseio.com",
  projectId: "chatapp-d0acd",
  storageBucket: "chatapp-d0acd.appspot.com",
  messagingSenderId: "194045922506",
  appId: "1:194045922506:web:4ef35d408b5978fddbb833"
})

const auth = firebase.auth()

export function useAuth() {
    const user = ref(null)
    auth.onAuthStateChanged(_user => (user.value = _user))
    onUnmounted(unsubscribe)
    const isLogin = computed(()=>user.value!==null)
    const signIn = async ()=>{
        await auth.signInWithPopup(googleProvider)
    }
    const signOut = ()=>auth.signOut()
}