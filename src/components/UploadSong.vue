<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
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
      <input type="file" multiple @change.prevent="itemDroped($event)" />
      <hr class="my-6" />
      <!-- Progess Bars -->
      <div v-for="upload in uploads" :key="upload" class="mb-4">
        <!-- File Name -->
        <div class="font-bold text-sm"><i :class="upload.icon"></i>{{ ` ${upload.name}` }}</div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded" :class="upload.visibiltiy">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar"
            :class="upload.varient"
            :style="{ width: upload.current_progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage, auth, songData as songCollection } from '@/include/fireBase';

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
      console.log($event);
      const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files]; // destucturing onject into arrays
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
          varient: 'bg-blue-400',
          icon: 'fas fa-spinner fa-spin',
          text_class: '',
          visibility: 'visible',
        }) - 1;
        // prettier-ignore
        tasks.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.uploads[uploadIndex].current_progress = progress;
          },
          (err) => {
            console.log(err);
            this.uploads[uploadIndex].varient = 'bg-red-400';
            this.uploads[uploadIndex].icon = 'fas fas-times';
            this.uploads[uploadIndex].text_class = 'text-red-400';
            this.uploads[uploadIndex].visibiltiy = "visible";
          },
          async () => {
            const songData = {
              userId: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              originalName: tasks.snapshot.ref.name,
              modifiedName: tasks.snapshot.ref.name,
              genre: '',
              commentCount: 0,
            };
            songData.url = await tasks.snapshot.ref.getDownloadURL();
            await songCollection.add(songData);
            this.uploads[uploadIndex].varient = 'bg-green-400';
            this.uploads[uploadIndex].icon = 'fa fa-check';
            this.uploads[uploadIndex].text_class = 'text-green-400';
            this.uploads[uploadIndex].visibiltiy = "invisible";
          },
        );
      });
    },
    cancelUploads() {
      this.uploads.forEach((ele) => {
        ele.tasks.cancel();
      });
    },
  },
};
</script>
