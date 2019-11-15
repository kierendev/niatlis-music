<template>
  <v-app>
    <Drawer
      v-model="drawer"
      :profilePicture="profilePicture"
      :displayName="displayName"
    />
    <AppBar
      @toggleDrawer="drawer = !drawer"
      :profilePicture="profilePicture"
      :displayName="displayName"
    />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <SnackBar />
    <MediaBar />

    <!-- <v-bottom-navigation app grow>
      <v-btn :to="{ name: 'index' }" exact>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'top-songs' }" active-class="deep-purple">
        <span>Top Songs</span>
        <v-icon>mdi-chart-timeline-variant</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'playlists' }" active-class="light-blue">
        <span>Playlists</span>
        <v-icon>mdi-playlist-music</v-icon>
      </v-btn>

      <v-btn>
        <span>Tracks</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'search' }">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-app>
</template>

<script>
import Drawer from '@/components/app/Drawer';
import AppBar from '@/components/app/AppBar';
import SnackBar from '@/components/app/SnackBar';
import MediaBar from '@/components/app/MediaBar';

export default {
  middleware: ['logged-in'],
  components: {
    Drawer,
    AppBar,
    SnackBar,
    MediaBar
  },
  data() {
    return {
      drawer: false,
      snackbar: false,
      snackbarText: '',
      currentlyPlaying: null,
      displayName: '',
      profilePicture: ''
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.profilePicture = window.localStorage.getItem('profilePicture');
      this.displayName = window.localStorage.getItem('displayName');
    }
  }
};
</script>
