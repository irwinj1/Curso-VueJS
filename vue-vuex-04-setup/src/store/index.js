import { createStore } from 'vuex'
import {getUser} from '@/api/index.js'
import {COMMIT_UPDATE_USERNAME} from '@/common/mutation-types.js'
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