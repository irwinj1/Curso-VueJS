import { createStore } from "vuex";
import moduleProfile from "./modules/profile/index.js";
import {COMMIT_SET_STATUS} from '../common/mutation-types'
import channels from './modules/channels/index.js'
import messages from './modules/messages/index.js'

const store = createStore({
  state: {
    status: null,
  },
  getters: {
    firstName(state) {
      return state.username;
    },
  },
  mutations: {
    [COMMIT_SET_STATUS](state, value) {
      state.status = value;
    },
  },
  actions: {},
  modules: {
    moduleProfile,
    channels,
    messages
  },
});

export default store;
