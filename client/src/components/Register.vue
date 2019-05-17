<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="green darken-3" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="zedtify-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="Password" v-model="password" type="password"></v-text-field>
            <br>
          </form>
          <br>
          <v-btn @click="register" class="register_button green darken-3" dark>Register</v-btn>
          <!-- <p>{{email}}</p>
          <p>{{password}}</p>-->
        </div>
        <div v-html="error" class="error"></div>
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
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

.register_button {
  margin-top: -20px;
  margin-bottom: 20px;
}
</style>
