<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <!-- here none is not at all a class we need no action to take place so.. -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        exact-active-class="None"
        :to="{ name: 'home' }"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!$store.getters.getUserLogin">
            <a class="px-2 text-white" href="#" @click.prevent="toogleAuth">Login / Register</a>
          </li>
          <template v-else class="flex flex-row mt-1">
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">Manage</router-link>
            </li>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'about' }">About</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'; // To acess state property => mapStates

export default {
  name: 'Headeder',
  methods: {
    ...mapMutations(['toogleAuth']),
    signOut() {
      this.$store.dispatch('signOut');
      this.$router.push({ name: 'home' }); // when signout button is clicked we are redirecting to home page
    },
    // this is responsible for showing regestration form
  },
};
</script>
