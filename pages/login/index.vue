<template>
  <div>
    <v-row align="center" justify="center" style="height: 90vh;">
      <v-col cols="12">
        <h1>Niatlis - Discover Music</h1>
        <p>
          Niatlis - Discover Music uses Spotify's Public APIs to find
          recommended music
        </p>
        <v-btn @click="loginToSpotify" outlined>Login with Spotify</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { redirectToSpotify } from '@/tools/auth.js';
export default {
  layout: 'auth',
  components: {},
  methods: {
    loginToSpotify() {
      return redirectToSpotify();
    }
  }
};
</script>
