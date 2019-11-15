<template>
  <div>
    <v-row v-if="!loading">
      <v-col cols="12">
        <h2>Searching for tracks related to {{ trackInfo.name }}</h2>
      </v-col>
      <v-col cols="12">
        <!-- <v-card>
          <v-img
            :src="trackInfo.album.images[1].url"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          />
          <v-card-title v-text="trackInfo.name" />
          <v-card-subtitle v-text="trackInfo.artists[0].name" />
          {{ trackInfo }}
        </v-card> -->
        <SongCard :song="trackInfo" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Results</h2>
      </v-col>
      <v-col
        :key="song.id"
        v-for="song in recommendedTracks"
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
  components: {
    SongCard
  },
  data() {
    return {
      trackInfo: {},
      recommendedTracks: [],
      loading: true
    };
  },
  created() {
    this.getTrackInfo();
  },
  methods: {
    getTrackInfo() {
      const trackURI = this.$route.params.id;
      spotifyApi.getTrack(trackURI).then((x) => {
        this.trackInfo = x;
        this.getTrackRecommendations(trackURI);
      });
    },
    getTrackRecommendations(trackURI) {
      spotifyApi
        .getRecommendations({
          seed_tracks: [trackURI]
        })
        .then((x) => {
          this.recommendedTracks = x.tracks;
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>
