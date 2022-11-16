import { createStore } from "vuex";
import { auth } from "../services/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import users from './module/users/index.js'

const store = createStore({
  state: {
    user: null,
    uidUser: null,
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload.email;
      state.uidUser = payload.uid;
      console.log(state.user, state.uidUser);
    },
    logoutUser(state) {
      state.user = "";
      state.uidUser = "";
    },
  },
  actions: {
    async singup({ commit }, usuario) {
      const { email, name, password, lastName } = usuario;
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        console.log(response);
        window.location.replace("/");
      } else {
        throw new Error("Error al conectarse");
      }
    },
    async login({ commit }, usuario) {
      const { email, password } = usuario;
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        window.localStorage.setItem('user',JSON.stringify(response.user))
        commit("setUser", response.user);
      } else {
        throw new Error("Error al logearse");
      }
    },
    async logout({ commit }) {
      await signOut(auth);

      commit("setUser", { email: null, uidUser: null });
      
    },
  },
  modules: {
    users
  },
});

export default store;
