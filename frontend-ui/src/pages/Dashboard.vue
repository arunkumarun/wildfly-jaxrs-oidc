<template>
  <v-app-bar color="teal-darken-4">
    <v-app-bar-title>Wildfly Vue OIDC Dashboard</v-app-bar-title>
    <v-spacer></v-spacer>

    <div class="d-flex ga-2">
      <v-btn color="blue-darken-4" variant="flat" @click="onLogin">Login</v-btn>
      <v-btn color="blue-darken-4" variant="flat" @click="onRenewToken">Renew Token</v-btn>
      <v-btn color="red-darken-4" variant="flat" @click="onLogout">Logout</v-btn>
    </div>
  </v-app-bar>

  <v-main>
    <v-container class="d-flex flex-column ga-4">
      <v-row v-if="errorMessage !== ''">
        <v-alert
            color="error"
            icon="$error"
            title="Error in System"
            :text="errorMessage"
        ></v-alert>
      </v-row>
      <v-row class="ga-4">
        <v-card title="Get Admin Message">
          <v-card-subtitle>Login to fetch the secret message</v-card-subtitle>
          <v-card-actions>
            <v-btn color="blue-darken-4" variant="flat" @click="fetchAdminMessage">Fetch</v-btn>
          </v-card-actions>
        </v-card>
        <v-card title="Get Open Message">
          <v-card-subtitle>Can be fetched without login</v-card-subtitle>
          <v-card-actions>
            <v-btn color="blue-darken-4" variant="flat" @click="fetchOpenMessage">Fetch</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row v-if="secretMessage !== ''">
        <v-alert
            color="info"
            icon="$info"
            title="Secret Admin Message"
            :text="secretMessage"
        ></v-alert>
      </v-row>
      <v-row v-if="openMessage !== ''">
        <v-alert
            color="info"
            icon="$info"
            title="Open Message"
            :text="openMessage"
        ></v-alert>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {User} from "oidc-client-ts";
import useAuthStore from "../stores/auth/auth-store.ts";
import axios from "axios";
import {useRouter} from "vue-router";

const secretMessage = ref('');
const openMessage = ref('');

const authService = useAuthStore();
const router = useRouter();

const errorMessage = ref('');

const currentUser = ref(null) as Ref<User | null>;

onMounted(() => {
  authService.getUser()
      .then((user) => {
        currentUser.value = user;
        if (user) {
          console.log('User Logged In');
        } else {
          console.log('User Not Logged In');
        }
      })
      .catch(err => {
        console.error('Get User Error', err);
      })
});

function onLogin() {
  authService.login().catch(err => {
    errorMessage.value = ('Login Error: ' + err);
  });
}

function onLogout() {
  authService.logout()
      .then(() => {
        router.push({name: 'dashboard'})
      })
      .catch(err => {
        errorMessage.value = ('Logout Error: ' + err);
      });
}

function onRenewToken() {
  authService.renewToken()
      .then(user => {
        currentUser.value = user;
      })
      .catch(err => {
        errorMessage.value = ('Renew Token Error: ' + err);
      });
}

async function fetchAdminMessage() {
  const user = await authService.getUser();
  if (user && user.access_token) {
    const response = await axios.get('/api/admin', {
      headers: {
        Authorization: `Bearer ${user.access_token}`
      },
    });
    if (response.status === 200) {
      secretMessage.value = response.data;
    } else {
      errorMessage.value = 'Error in fetching the admin message' + response.statusText;
    }
  } else {
    const response = await axios.get('/api/admin');
    if (response.status === 200) {
      secretMessage.value = response.data;
    } else {
      errorMessage.value = 'Error in fetching the admin message' + response.statusText;
    }
  }
}

async function fetchOpenMessage() {
  const response = await axios.get('/api/open');
  if (response.status === 200) {
    openMessage.value = response.data;
  } else {
    errorMessage.value = 'Error in fetching the open message' + response.statusText;
  }
}

</script>

<style scoped>

</style>