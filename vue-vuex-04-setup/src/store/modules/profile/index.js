import {getUser} from '@/api/index.js'
import {COMMIT_UPDATE_USERNAME} from '@/common/mutation-types.js'
const moduleProfile = {
    namespaced: true,
    state:{
  
        username:'irwin.guardado'
    
  },
  getters:{
    firstName(state){
        return state.username
    }
  },
  mutations:{
    [COMMIT_UPDATE_USERNAME](state,payload){
        state.username = payload
    }
  },
  actions:{
    async updateUsername({commit},payload){
        const user = await getUser(1)
        console.log(user);
        commit(COMMIT_UPDATE_USERNAME,payload)
       
    }
  },
}

export default moduleProfile