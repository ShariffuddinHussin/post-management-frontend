<template>
  <v-app>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"> Login </v-list-item-title>
          <v-list-item-subtitle>
            <form @submit.prevent="handleSubmit" id="login-form">
              <div class="form-group">
                <v-text-field
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="email"
                  :error-messages="emailErrors"
                >
                </v-text-field>
              </div>
              <div class="form-group">
                <v-text-field
                  type="password"
                  class="form-control"
                  placeholder="password"
                  v-model="password"
                >
                </v-text-field>
              </div>
              <v-btn color="success" type="submit" form="login-form"
                >Login</v-btn
              >
            </form>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://post-management-backend.test/api/login",
        {
          email: this.email,
          password: this.password,
        }
      );

      localStorage.setItem("token", response.data.token);
      this.$router.push("/view");
    },
  },
};
</script>

<style>
</style>