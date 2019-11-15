<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="profilePicture" :alt="displayName" />
      </v-list-item-avatar>

      <v-list-item-title v-text="displayName" />

      <!-- <v-btn @click.stop="mini = !mini" icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item :to="{ name: 'index' }" @click="drawer = false" exact link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        :to="{ name: 'top-songs' }"
        @click="drawer = false"
        active-class="deep-purple"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-chart-timeline-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Top Songs</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        :to="{ name: 'playlists' }"
        @click="drawer = false"
        active-class="light-blue"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-playlist-music</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Playlists</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- <v-list-item
          :to="{ name: 'top-songs' }"
          @click="drawer = false"
          active-class="deep-purple"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-chart-timeline-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Your Tracks</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

      <v-list-item
        :to="{ name: 'search' }"
        @click="drawer = false"
        active-class="deep-purple"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Search</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list dense nav subheader>
      <v-subheader>Settings</v-subheader>
      <v-list-item :to="{ name: 'settings' }" @click="drawer = false" link>
        <v-list-item-icon>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'about' }" @click="drawer = false" link>
        <v-list-item-icon>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    displayName: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      drawer: false
    };
  },
  watch: {
    value(e) {
      if (e !== this.drawer) {
        this.drawer = e;
      }
    },
    drawer(e) {
      if (e !== this.value) {
        this.$emit('input', e);
      }
    }
  }
};
</script>

<style></style>
