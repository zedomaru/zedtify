<template>
  <v-toolbar fixed class="green darken-3" dark>
    <v-toolbar-title class="mr-4">
      <span @click="navigateTo('/')" class="home">Zedtify</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo('login')" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo('register')" v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: rgba(151, 250, 120, 0.959);
}
</style>
