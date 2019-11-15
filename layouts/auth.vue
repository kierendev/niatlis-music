<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    changeNav(name) {
      this.$router.push({ name });
    }
  }
};
</script>
