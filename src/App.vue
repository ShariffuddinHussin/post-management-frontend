<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <v-toolbar-title>Login</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <router-link to="/register" tag="span"
          ><v-btn flat>Register</v-btn></router-link
        >
      </div>
    </v-toolbar>
    <main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </main>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>