<template>
  <div
    v-if="dialogData.dialog_box"
    class="dialog"
    :class="{ red: dialogData.dialog_red, green: dialogData.dialog_green }"
  >
    {{ dialogData.dialog_msg }}
  </div>
  <!-- Login Form -->
  <vee-form :validation-schema="schema" v-slot="{ values }">
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
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <error-message name="password" style="color: red"></error-message>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      @click.prevent="call(values)"
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
        password: 'required|length:6',
      },
      dialogData: {
        dialog_box: false,
        dialog_msg: 'your response is being submited',
        dialog_red: false,
        dialog_blue: true,
        dialog_green: false,
      },
    };
  },
  methods: {
    async call(values) {
      this.dialogData.dialog_red = false;
      this.dialogData.dialog_green = false;
      this.dialogData.dialog_msg = 'your response is being submited';
      this.dialogData.dialog_box = true;
      this.dialogData.dialog_blue = true;
      console.log(values); // stores the user credentioal returned by auth (tokens, uid)
      try {
        await this.$store.dispatch('login', values);
      } catch (error) {
        this.dialogData.dialog_red = true;
        this.dialogData.dialog_msg = error.message;
        return;
      }
      this.dialogData.dialog_msg = 'submitted';
      this.dialogData.dialog_green = true;
    },
  },
};
</script>

<style scoped>
.dialog {
  padding: 1rem 25%;
  text-align: center;
  font-weight: bold;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(40, 155, 170);
  color: #fff;
}
.red {
  background-color: aliceblue;
  color: red;
}
.green {
  background-color: rgb(38, 192, 11);
  color: aliceblue;
}
</style>
