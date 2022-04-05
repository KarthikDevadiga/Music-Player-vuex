<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">
    <div v-show="!edit">
      <h4 class="inline-block text-1xl font-bold">{{ song.modifiedName }}</h4>
      <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
        <i class="fa fa-times"></i>
      </button>
      <button
        @click.prevent="edit = !edit"
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div v-show="edit">
      <div
        class="text-white text-center font-bold p-4 mb-4"
        v-show="showAlert"
        :class="alertVarient"
      >
        {{ alertMsg }}
      </div>
      <vee-form :validation-schema="schema" :initial-values="song" @submit="editSong">
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-field
            name="modifiedName"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Song Title"
          />
          <error-message class="text-red-600" name="modifiedName"></error-message>
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-field
            name="genre"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Genre"
          />
          <error-message class="text-red-600" name="genre"></error-message>
        </div>
        <button
          type="submit"
          class="py-1.5 px-3 rounded text-white bg-green-600"
          :disabled="inSubmission"
          :class="{ disable: inSubmission }"
        >
          Submit
        </button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          :disabled="inSubmission"
          :class="{ disable: inSubmission }"
          @click.prevent="edit = !edit"
        >
          Go Back
        </button>
      </vee-form>
    </div>
  </div>
</template>

<script>
import { songData } from '@/include/fireBase';

export default {
  props: ['song', 'updateSongs', 'i'],
  data() {
    return {
      edit: false,
      schema: {
        modifiedName: 'required',
        genre: 'alphaSpace',
      },
      inSubmission: false,
      showAlert: false,
      alertMsg: 'form is being submited',
      alertVarient: 'bg-blue-600',
    };
  },
  methods: {
    async editSong(values) {
      this.inSubmission = true;
      this.showAlert = true;
      this.alertMsg = 'form is being submited';
      this.alertVarient = 'bg-blue-600';
      try {
        console.log(this.song);
        console.log(values);

        await songData.doc(this.song.docId).update(values);
      } catch (err) {
        console.log(err);
        this.inSubmission = false;
        this.showAlert = true;
        this.alertMsg = 'something wrong in your data';
        this.alertVarient = 'bg-red-600';
        return;
      }
      this.inSubmission = false;
      this.showAlert = true;
      this.alertMsg = 'form is submited';
      this.alertVarient = 'bg-green-600';
      this.updateSongs(this.i, values);
    },
  },
};
</script>

<style scoped>
.disable {
  opacity: 0.3;
}
</style>
