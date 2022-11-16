import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:null,
    error:null
  },
  getters: {
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario=payload
    },
    setError(state,payload){
      state.error = payload
    }
  },
  actions: {
    
  },
  modules: {
  }
})
