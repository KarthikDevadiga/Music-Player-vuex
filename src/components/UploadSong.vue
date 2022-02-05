<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
      <div
        class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
        :class="{ 'text-white bg-green-400 border-green-400 border-solid': dragEvent }"
        @drag.prevent.stop=""
        @dragend.prevent.stop="dragEvent = false"
        @dragenter.prevent.stop="dragEvent = true"
        @dragleave.prevent.stop="dragEvent = false"
        @dragover.prevent.stop="dragEvent = true"
        @drop.prevent.stop="itemDroped($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <hr class="my-6" />
      <!-- Progess Bars -->
      <div v-for="upload in uploads" :key="upload" class="mb-4">
        <!-- File Name -->
        <div class="font-bold text-sm">{{ upload.name }}</div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar bg-blue-400"
            :class="'bg-blue-400'"
            :style="{ width: upload.current_progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from '@/include/fireBase';

export default {
  name: 'UploadSong',
  data() {
    return {
      dragEvent: false,
      uploads: [],
    };
  },
  methods: {
    itemDroped($event) {
      this.dragEvent = false;
      console.log('item droped');
      const files = [...$event.dataTransfer.files]; // destucturing onject into arrays
      files.forEach((file) => {
        if (file.type !== 'audio/mpeg') {
          console.log(file.type);
          return;
        }
        const storageRef = storage.ref(); // acessing root folder
        const songRef = storageRef.child(`songs/${file.name}`); // child directory
        const tasks = songRef.put(file);
        // prettier-ignore
        const uploadIndex = this.uploads.push({
          tasks,
          current_progress: 0,
          name: file.name,
        }) - 1;

        tasks.on('state_changed', (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploads[uploadIndex].current_progress = progress;
        });
      });
    },
  },
};
</script>
