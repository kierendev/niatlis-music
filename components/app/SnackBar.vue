<template>
  <v-snackbar v-model="snackbar">
    {{ snackbarText }}
    <v-btn @click="snackbar = false" color="pink" text>Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: ''
    };
  },
  created() {
    this.$root.$on('alert', (e) => {
      this.openSnackBar(e.text);
    });
  },
  methods: {
    openSnackBar(text) {
      this.snackbar = true;
      this.snackbarText = text;
    }
  }
};
</script>

<style></style>
