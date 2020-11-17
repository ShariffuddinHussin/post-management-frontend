<template>
  <v-app>
    <div class="text-right">
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
                  <v-list-item-subtitle
                    >author :{{ post.user_id }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    >created at {{ post.created_at }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <edit />
                <!-- <v-btn class="ma-2" color="success">
                  <v-icon> mdi-pencil </v-icon> Edit
                </v-btn> -->
                <v-btn class="ma-2" color="error">
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
import axios from "axios";
import create from "../modal/create";
import edit from "../modal/edit";
export default {
  components: {
    create,
    edit,
  },
  data() {
    return {
      dialog: false,
      post: undefined,
    };
  },
  name: "view",
  async mounted() {
    const response = await axios
      .get("http://post-management-backend.test/api/posts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.post = response.data.data;
      });
    return response;
  },
  // delete
  methods: {
    editPost: function () {

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