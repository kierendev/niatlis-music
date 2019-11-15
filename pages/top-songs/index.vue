<template>
  <div>
    <v-row>
      <v-col
        :key="song.id"
        v-for="song in topSongs"
        cols="12"
        md="4"
        lg="3"
        xl="2"
      >
        <SongCard :song="song" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import spotifyApi from '@/tools/spotify';
import SongCard from '@/components/SongCard';
export default {
  head: {
    title: 'TOp Songs'
  },
  components: {
    SongCard
  },
  data() {
    return {
      topSongs: []
    };
  },
  mounted() {
    this.getTopTracks();
  },
  methods: {
    getTopTracks() {
      spotifyApi.getMyTopTracks().then((x) => {
        this.topSongs = x.items;
      });
    }
  }
};
</script>
