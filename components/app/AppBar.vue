<template>
  <v-app-bar :color="activeColor" elevate-on-scroll clipped-left app>
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')" />
    <v-toolbar-title>Niatlis</v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>mdi-dots-vertical</v-icon>
          <v-avatar>
            <img :src="profilePicture" :alt="displayName" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item :to="{ name: 'settings' }">
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'about' }">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'logout' }">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      required: true
    }
  },
  computed: {
    activeColor() {
      switch (this.$route.name) {
        case 'top-songs':
          return 'deep-purple';
        case 'playlists':
          return 'light-blue';
        default:
          return '';
      }
    }
  }
};
</script>

<style></style>
