<template>
  <v-app>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"> Register </v-list-item-title>
          <v-list-item-subtitle>
            <form @submit.prevent="handleSubmit" id="login-form">
              <div class="form-group">
                <v-text-field
                  type="text"
                  class="form-control"
                  placeholder="name"
                  v-model="name"
                  
                >
                </v-text-field>
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
                >Register</v-btn
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
      name:"",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post(
        "http://post-management-backend.test/api/register",
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        
      );
      return response;
    },
  },
};
</script>

<style>
</style>