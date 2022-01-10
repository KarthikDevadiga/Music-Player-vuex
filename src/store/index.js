import { createStore } from 'vuex';

export default createStore({
  state: {
    toogleAuth: true,
  },
  mutations: {
    toogleAuth(state) {
      state.toogleAuth = !state.toogleAuth;
      console.log(state.toogleAuth);
    },
  },
  getters: {
    getAuthToogle(state) {
      return state.toogleAuth;
    },
  },
});
