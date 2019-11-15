<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>Settings</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Hover Preview</v-card-title>
          <v-card-subtitle v-if="!$vuetify.breakpoint.mdAndUp"
            >Disabled on mobile</v-card-subtitle
          >
          <v-card-text>
            <v-row align="center">
              <v-col cols="12">
                <v-switch
                  v-model="hoverPlay"
                  label="Enable Hover Preview"
                ></v-switch>
              </v-col>
              <v-col cols="12">
                <v-label>Preview Volume</v-label>
                <v-slider
                  v-model="hoverVolume"
                  append-icon="mdi-volume-high"
                  prepend-icon="mdi-volume-low"
                  step="0.1"
                  min="0"
                  max="1"
                ></v-slider>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="red--text">Disconnect Account</v-card-title>
          <v-card-text>
            <v-row align="center">
              <v-col cols="12">
                <v-btn color="red" dark>Disconnect Account</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    hoverPlay: {
      // getter
      get() {
        return window.localStorage.getItem('hoverPlay') === 'true';
      },
      // setter
      set(newValue) {
        window.localStorage.setItem('hoverPlay', `${newValue}`);
      }
    },
    hoverVolume: {
      // getter
      get() {
        const volStorage = window.localStorage.getItem('hoverVolume');
        return volStorage !== null ? volStorage : 0.2;
      },
      // setter
      set(newValue) {
        window.localStorage.setItem('hoverVolume', `${newValue}`);
      }
    }
  }
};
</script>

<style></style>
