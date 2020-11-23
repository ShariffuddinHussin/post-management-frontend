<template>
  <v-row>
    <v-dialog persistent width="600px" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon> mdi-pencil </v-icon>
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              {{ id }}
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  required
                  v-model="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Description"
                  required
                  v-model="description"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="savePost()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  props: ["post"],
  data() {
    return {
      dialog: false,
      id: this.post.id,
      title: this.post.title,
      description: this.post.description,
    };
  },
  methods: {
    closeDialog: function () {
      this.dialog = false;
    },
    savePost: function () {
      this.dialog = false;
      try {
        let response = axios.patch(
          process.env.VUE_APP_ROOT_URL + "api/posts/" + this.post.id,
          {
            title: this.title,
            description: this.description,
          },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        return response;
      } catch (error) {
        window.alert(error);
        console.log(error);
      }
    },
  },
};
</script>
<style>
</style>