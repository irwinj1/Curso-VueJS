import { createStore } from 'vuex'
import moduleProfile from './modules/profile/index.js'

const store = createStore({
  state:{
  
  },
  getters:{
    firstName(state){
        return state.username
    }
  },
  mutations:{
   
  },
  actions:{
   
  },
  modules:{
    moduleProfile
  }
})

export default store