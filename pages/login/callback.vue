<template>
  <div>
    <h1>Redirecting</h1>
  </div>
</template>

<script>
import { loginToSpotify } from '@/tools/auth.js';
export default {
  layout: 'auth',
  mounted() {
    loginToSpotify(this.$route.hash).then((x) =>
      this.$router.push({ name: 'index' })
    );
  }
};
</script>

<style></style>
