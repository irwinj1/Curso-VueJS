import {db} from '@/services/firebase.js'
import {collection,getDoc,addDoc} from 'firebase/firestore'

const store = {
    namespaced:true,
    state:{},
    getters:{},
    actions:{
        async adduser(payload){
            const docRef = await addDoc(collection(db,{}))
        }
    },
}

export default store