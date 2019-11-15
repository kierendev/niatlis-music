<template>
  <div>
    <v-row justify="center">
      <!-- <v-col cols="12">
        <h1>Welcome to Niatlis</h1>
      </v-col> -->
      <v-col cols="12">
        <v-text-field
          v-model="searchString"
          label="Search Tracks..."
          solo
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card dark color="deep-purple">
          <v-card-title class="headline">Your Top Songs</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <TrackList :tracks="topSongs" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn :to="{ name: 'top-songs' }" text>View More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card dark color="light-blue">
          <v-card-title class="headline">Your Playlists</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <TrackList :tracks="topSongs" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text>View More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card dark color="blue-grey darken-3">
          <v-card-title class="headline">Your Tracks</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <TrackList :tracks="topSongs" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text>View More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card dark color="deep-orange">
          <v-card-title class="headline">Your Recent Songs</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <TrackList :tracks="recentlyPlayed" />
              </v-col>
              <!-- <v-col cols="12" md="6">
                <TrackList :tracks="topSongs" />
              </v-col>-->
            </v-row>
          </v-card-text>
          <!-- <v-card-actions>
            <v-spacer />
            <v-btn :to="{ name: 'top-songs' }" text>View More</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import spotifyApi from '@/tools/spotify';
import TrackList from '@/components/TrackList';

export default {
  meta: {
    name: 'Niatlis'
  },
  components: {
    TrackList
  },
  data() {
    return {
      searchString: '',
      topSongs: [],
      recentlyPlayed: []
    };
  },
  watch: {
    searchString(currentString) {
      if (currentString.length > 3) {
        this.$router.push({
          name: 'search',
          query: { q: currentString }
        });
      }
    }
  },
  mounted() {
    this.getRecentlyPlayed();
    this.getTopTracks();
  },
  methods: {
    getRecentlyPlayed() {
      spotifyApi.getMyRecentlyPlayedTracks().then((x) => {
        this.recentlyPlayed = x.items.map((t) => t.track).slice(0, 5);
      });
    },
    getTopTracks() {
      spotifyApi.getMyTopTracks().then((x) => {
        this.topSongs = x.items.slice(0, 5);
      });
    }
  }
};
</script>
