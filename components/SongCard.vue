<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        @mouseenter="playPreview(song)"
        @mouseleave="stopPreview"
        :elevation="hover ? 24 : 6"
      >
        <v-img
          :src="song.album.images[1].url"
          @click="
            $router.push({ name: 'search-track-id', params: { id: song.id } })
          "
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"
          style="cursor:pointer"
        >
          <v-card-title v-text="song.name" />
          <v-card-subtitle v-text="song.artists[0].name" class="white--text" />
        </v-img>
        <v-progress-linear
          :active="hover && previewAudio !== null"
          :value="currentTime"
          buffer-value="0"
          stream
        ></v-progress-linear>

        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" @click="playSong(song)" icon>
                <v-icon>mdi-play-circle</v-icon>
              </v-btn>
            </template>
            <span>Play In Spotify</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn :href="song.uri" v-on="on" icon>
                <v-icon>mdi-spotify</v-icon>
              </v-btn>
            </template>
            <span>Open in Spotify</span>
          </v-tooltip>

          <v-spacer></v-spacer>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" @click="shareSong(song)" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add To Playlist</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" @click="shareSong(song)" icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </template>
            <span>Share</span>
          </v-tooltip>

          <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            :to=""
            v-on="on"
            nuxt
            icon
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>Find Similar</span>
      </v-tooltip> -->
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import spotifyApi from '@/tools/spotify';
export default {
  props: ['song'],
  data() {
    return {
      previewAudio: null,
      maxTime: 0,
      currentTime: 0
    };
  },
  beforeDestroy() {
    this.stopPreview();
  },
  methods: {
    shareSong(song) {
      if ('share' in navigator) {
        return navigator.share({
          title: song.title,
          url: song.uri
        });
      } else {
        navigator.clipboard.writeText(song.uri);
        this.$root.$emit('alert', {
          text: 'Copied To Clipboard'
        });
      }
    },
    playSong(song) {
      spotifyApi.play({ uris: [song.uri] }).then((x) => {
        this.$root.$emit('alert', {
          text: 'Playing on Spotify'
        });
      });
    },
    playPreview(song) {
      const volStorage = window.localStorage.getItem('hoverVolume');
      if (
        window.localStorage.getItem('hoverPlay') === 'true' &&
        this.$vuetify.breakpoint.mdAndUp
      ) {
        this.stopPreview();
        this.previewAudio = new Audio(song.preview_url);
        this.previewAudio.volume = volStorage !== null ? volStorage : 0.2;
        this.previewAudio.addEventListener('timeupdate', (e) => {
          if (this.previewAudio !== null) {
            this.maxTime = this.previewAudio.duration;
            this.currentTime =
              (this.previewAudio.currentTime * 100) / this.maxTime;
          }
        });
        this.previewAudio.play();
      }
    },
    stopPreview() {
      if (this.previewAudio) {
        this.previewAudio.pause();
        this.previewAudio = null;
      }
    }
  }
};
</script>

<style></style>
