import { createStore } from 'vuex';

export default createStore({
  state: {
    toogleAuthProperty: true,
  },
  mutations: {
    toogleAuth(state) {
      state.toogleAuthProperty = !state.toogleAuthProperty;
      console.log(state.toogleAuthProperty);
    },
  },
  getters: {
    getAuthToogle(state) {
      return state.toogleAuthProperty;
    },
  },
});
