<template>
  <v-app>
    <div class="mx-6 my-6">
      <create />
    </div>

    <div>
      <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <v-layout wrap>
          <div class="container" v-for="post in post" :key="post.id">
            <v-card class="mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">
                    {{ post.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{
                    post.description
                  }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ post.id }}</v-list-item-subtitle>
                  <v-list-item-subtitle
                    >author :{{ post.user_id }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    >created at {{ post.created_at }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <template v-if="true">
                  <v-spacer></v-spacer>
                  <div class="mx-6">
                    <edit :post="post" />
                  </div>
                </template>

                <v-btn class="ma-2" color="error" @click="deletePost(post.id)">
                  <v-icon> mdi-delete </v-icon> Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import create from "../modal/create";
import edit from "../modal/edit";

Vue.use(VueAxios, axios);
export default {
  props: {},
  components: {
    create,
    edit,
  },
  data() {
    return {
      post: null,
    };
  },
  name: "view",
  mounted() {
    this.getPost();
  },
  // delete
  methods: {
    getPost() {
      this.axios
        .get(process.env.VUE_APP_ROOT_URL + "api/posts", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((result) => {
          this.post = result.data.data;
        });
    },
    deletePost(id) {
      this.axios
        .delete(process.env.VUE_APP_ROOT_URL + "api/posts/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.getPost();
        });
    },
  },
};
</script>

<style >
table,
th,
td {
  padding: 10px;
  border: 1px solid black;
  border-collapse: collapse;
}
</style>