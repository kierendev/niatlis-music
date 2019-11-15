<template>
  <h1>Logging Out</h1>
</template>

<script>
export default {
  layout: 'auth',
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.push('/login');
    }
  }
};
</script>

<style></style>
