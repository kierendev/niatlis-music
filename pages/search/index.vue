<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          id="searchbox"
          v-model.lazy="searchString"
          @input="searchForTrack"
          :loading="loading"
          label="Search For Track..."
          solo
          autofocus
          append-icon="mdi-magnify"
          auto-complete="off"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-if="!loading" justify="center">
      <v-col
        :key="song.id"
        v-for="song in searchResults"
        cols="12"
        md="4"
        lg="3"
        xl="2"
      >
        <v-lazy>
          <SongCard :song="song" />
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import spotifyApi from '@/tools/spotify';
import SongCard from '@/components/SongCard';

export default {
  meta: {
    name: 'Search'
  },
  components: {
    SongCard
  },
  data() {
    return {
      searchString: '',
      searchResults: [],
      loading: false,
      searchTimeout: null
    };
  },
  mounted() {
    const routeQuerySearch = this.$route.query.q;
    if (routeQuerySearch !== undefined && routeQuerySearch.length > 3) {
      this.searchString = routeQuerySearch;
      this.searchForTrack();
    }
  },
  methods: {
    searchForTrack() {
      this.searchResults = [];
      clearTimeout(this.searchTimeout);
      if (this.searchString.length > 3) {
        this.loading = true;
        this.searchTimeout = setTimeout(() => {
          spotifyApi.search(this.searchString, ['track']).then((x) => {
            this.searchResults = x.tracks.items;
            this.$router.push({ query: { q: this.searchString } });
            this.loading = false;
          });
        }, 200);
      }
    }
  }
};
</script>

<style></style>
