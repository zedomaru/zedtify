<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email" name="email" placeholder="Email" v-model="email">
          <br>
          <input type="password" name="password" v-model="password" placeholder="Password">
          <br>
          <div v-html="error" class="error"></div>
          <br>
          <v-btn @click="register">Register</v-btn>
          <!-- <p>{{email}}</p>
          <p>{{password}}</p>-->
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
        // console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
