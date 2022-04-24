<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <!-- upload-Song -->
        <upload-song ref="upload"></upload-song>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <composition-item
              v-for="(song, i) in songs"
              :key="song.docId"
              :song="song"
              :updateSongs="updateSongs"
              :i="i"
              :deleteFromData="deleteFromData"
            ></composition-item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import store from '../store';
import UploadSong from '@/components/UploadSong.vue';
import { auth, songData } from '@/include/fireBase';
import CompositionItem from '../components/CompositionItem.vue';

export default {
  name: 'Manage',
  data() {
    return {
      songs: [],
    };
  },
  components: {
    UploadSong,
    CompositionItem,
  },

  async created() {
    const snapshot = await songData.where('userId', '==', auth.currentUser.uid).get();
    snapshot.forEach((document) => {
      const song = {
        ...document.data(),
        docId: document.id,
      };
      this.songs.push(song);
    });
  },
  methods: {
    updateSongs(i, values) {
      console.log(this.songs[i].modifiedName);
      this.songs[i].modifiedName = values.modifiedName;
      this.songs[i].genre = values.genre;
    },
    deleteFromData(i) {
      this.songs.splice(i, 1);
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(store.getters.getUserLogin);
  //   if (store.getters.getUserLogin) {
  //     next();
  //   } else {
  //     next({ name: 'home' }); // also next(false)
  //   }
  // },
  beforeRouteLeave(to, from, next) {
    this.$refs.upload.cancelUploads();
    next();
  },
};
</script>
