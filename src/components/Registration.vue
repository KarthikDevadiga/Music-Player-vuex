<template>
  <!-- Registration Form -->
  <vee-form :validation-schema="schema" :initial-values="userData" @submit.prevent="call">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <error-message name="name" style="color: red"></error-message>
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <error-message name="email" style="color: red"></error-message>
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <vee-field
        name="age"
        type="number"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
      <error-message name="age" style="color: red"></error-message>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="e in errors" :key="e">{{ e }}</div>
      </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        name="confirmPassword"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <error-message name="confirmPassword" style="color: red"></error-message>
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <vee-field
        name="movie"
        as="select"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
      </vee-field>
      <error-message name="movie" style="color: red"></error-message>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <!-- prettier-ignore -->
      <vee-field
                name="tos"
                type="checkbox"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded"
                value=1
              />
      <label class="inline-block">Accept terms of service</label>
      <error-message name="tos" style="color: red"></error-message>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      @click.prevent="call"
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
        age: 'required|integer|minValue:18',
        password: 'required|length:5',
        confirmPassword: 'required|confiremed:@password',
        movie: 'required',
        tos: 'required',
        loginPassword: 'required',
      },
      userData: {
        movie: 'Germany',
      },
    };
  },
  methods: {
    call() {
      console.log('done');
    },
  },
};
</script>
