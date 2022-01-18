<template>
  <!-- Login Form -->
  <vee-form :validation-schema="schema" @submit.prevent="call">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="name"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <error-message name="name" style="color: red"></error-message>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="loginPassword"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <error-message name="loginPassword" style="color: red"></error-message>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  data() {
    return {
      schema: {
        name: 'required|alphaSpace',
        email: 'required|email',
        password: 'required|length:5',
      },
    };
  },
  methods: {
    call(values) {
      console.log(values);
    },
  },
};
</script>
