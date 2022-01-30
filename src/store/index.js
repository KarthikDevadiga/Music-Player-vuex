import { createStore } from 'vuex';
import { auth, userData } from '@/include/fireBase';

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
    async register({ commit }, values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password); // if user is not authenticated this will set to null
      // storing in fireStore (DB)
      await userData.doc(userCred.user.uid).set({
        // sets the userid generated from auth
        // returns a promise
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        role: values.purpose,
      });
      // storing additiona information but it is limited. we can only store display name and profile image
      userCred.user.updateProfile({
        displayName: values.name,
      });
      commit('TOGGLE_USER_LOGEDIN'); // can pass other value (payload) => this.$store.dispatch('tooglelogin', value);
    },
  },
  getters: {
    getAuthToogle(state) {
      return state.toogleAuthProperty;
    },
    getUserLogin: (state) => state.userLogedIn,
  },
});
