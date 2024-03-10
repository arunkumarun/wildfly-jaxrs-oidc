<template>
  <v-app-bar color="teal-darken-4">
    <v-app-bar-title>Wildfly Vue OIDC Dashboard</v-app-bar-title>
    <v-spacer></v-spacer>

    <div class="d-flex ga-2">
      <v-btn color="blue-darken-4" variant="flat"><router-link to="/">To Dashboard</router-link></v-btn>
    </div>
  </v-app-bar>
  <v-main>
    <p>Logged out. </p>
  </v-main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>