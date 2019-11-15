<template>
  <v-card>
    <v-img
      :src="returnPlaylistCoverURL(playlist)"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="300px"
    >
      <v-card-title v-text="playlist.name" />
      <v-card-subtitle v-text="playlist.name" class="white--text" />
    </v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="playPlaylist(playlist)" icon>
            <v-icon>mdi-play-circle</v-icon>
          </v-btn>
        </template>
        <span>Play In Spotify</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn :href="playlist.uri" v-on="on" icon>
            <v-icon>mdi-spotify</v-icon>
          </v-btn>
        </template>
        <span>Open in Spotify</span>
      </v-tooltip>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="sharePlaylist(playlist)" icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </template>
        <span>Share</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" nuxt icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>Find Similar</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import spotifyApi from '@/tools/spotify';
export default {
  props: ['playlist'],
  methods: {
    sharePlaylist(playlist) {
      if ('share' in navigator) {
        return navigator.share({
          title: playlist.name,
          url: playlist.uri
        });
      } else {
        navigator.clipboard.writeText(playlist.uri);
        this.$root.$emit('alert', {
          text: 'Copied To Clipboard'
        });
      }
    },
    playPlaylist(playlist) {
      spotifyApi.play({ context_uri: playlist.uri }).then((x) => {
        this.$root.$emit('alert', {
          text: 'Playing on Spotify'
        });
      });
    },
    returnPlaylistCoverURL(playlist) {
      if (playlist.images.length > 0 && playlist.images[0].url !== undefined) {
        return playlist.images[0].url;
      }
      return '';
    }
  }
};
</script>

<style></style>
