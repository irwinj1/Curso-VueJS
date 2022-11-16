import { getUser } from "@/api/index.js";
import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from "@/common/mutation-types.js";
const moduleProfile = {
  namespaced: true,
  state: {
    username: "",
  },
  getters: {
    firstName(state) {
      return state.username;
    },
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async updateUsername({ commit, state, rootState }, payload) {
      const user = await getUser(1);

      //  console.log(user);
       commit(COMMIT_UPDATE_USERNAME, payload);
      if (state.username) {
        commit(COMMIT_SET_STATUS, "active", { root: true });
      }
     
       commit(COMMIT_UPDATE_USERNAME, payload);
    },
  },
};

export default moduleProfile;
