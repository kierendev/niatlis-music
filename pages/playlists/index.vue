<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>Your Playlists</h1>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col
        :key="playlist.id"
        v-for="playlist in playlists"
        cols="12"
        md="4"
        lg="3"
        xl="2"
      >
        <PlaylistCard :playlist="playlist" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import spotifyApi from '@/tools/spotify';
import PlaylistCard from '@/components/PlaylistCard';
export default {
  components: {
    PlaylistCard
  },
  data() {
    return {
      loading: true,
      playlists: []
    };
  },
  mounted() {
    this.getUserPlaylists();
  },
  methods: {
    getUserPlaylists() {
      this.loading = true;
      spotifyApi.getUserPlaylists().then((x) => {
        this.playlists = x.items;
        this.loading = false;
      });
    }
  }
};
</script>
