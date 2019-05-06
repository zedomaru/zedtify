<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="Email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="Password" v-model="password">
    <br>
    <button @click="register">Register</button>
    <!-- <p>{{email}}</p>
    <p>{{password}}</p>-->
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
  // watch: {
  //   email(value) {
  //     console.log("email changed ", value);
  //   }
  // }
};
</script>

<style>
</style>
