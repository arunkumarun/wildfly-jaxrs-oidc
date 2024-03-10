<template>
  <p>Processing Redirect</p>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import useAuthStore from "../stores/auth/auth-store.ts";
import {useRouter} from "vue-router";

const authService = useAuthStore();

const router = useRouter();

onMounted(() => {
  authService.signinCallback().finally(() => {
    router.push({name: 'dashboard'})
  })
});
</script>

<style scoped>

</style>