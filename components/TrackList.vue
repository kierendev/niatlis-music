<template>
  <v-list light dense two-line>
    <v-list-item
      v-for="track in tracks"
      :key="track.id"
      :to="{ name: 'search-track-id', params: { id: track.id } }"
    >
      <v-list-item-avatar tile>
        <v-img :src="returnTrackImage(track)" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="track.name" />
        <v-list-item-subtitle v-text="track.artists[0].name" />
      </v-list-item-content>

      <v-list-item-icon>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click.prevent="playSong(track)" icon>
              <v-icon>mdi-play-circle</v-icon>
            </v-btn>
          </template>
          <span>Play In Spotify</span>
        </v-tooltip>
        <!-- <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
             
              v-on="on"
              nuxt
              icon
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
          <span>Find Similar</span>
        </v-tooltip> -->
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
import spotifyApi from '@/tools/spotify';
export default {
  props: ['tracks'],
  methods: {
    returnTrackImage(track) {
      if (track.album.images.length > 0) {
        return track.album.images[0].url;
      }
      return '';
    },
    playSong(song) {
      spotifyApi.play({ uris: [song.uri] }).then((x) => {
        this.$root.$emit('alert', {
          text: 'Playing on Spotify'
        });
      });
    }
  }
};
</script>

<style></style>
