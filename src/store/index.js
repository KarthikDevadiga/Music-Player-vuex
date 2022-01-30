import { createStore } from 'vuex';

export default createStore({
  state: {
    toogleAuthProperty: true,
    userLogedIn: false,
  },
  mutations: {
    toogleAuth(state) {
      state.toogleAuthProperty = !state.toogleAuthProperty;
      console.log(state.toogleAuthProperty);
    },
    TOGGLE_USER_LOGEDIN: (state) => {
      state.userLogedIn = !state.userLogedIn;
    },
  },
  actions: {
    tooglelogin: ({ state, commit }) => {
      // can recive any additional value (payload) => tooglelogin: ({ state, commit }, value) => {
      commit('TOGGLE_USER_LOGEDIN');
      console.log(state.userLogedIn ? 'logedIn' : 'notLogedIn');
    },
  },
  getters: {
    getAuthToogle(state) {
      return state.toogleAuthProperty;
    },
    getUserLogin: (state) => state.userLogedIn,
  },
});
