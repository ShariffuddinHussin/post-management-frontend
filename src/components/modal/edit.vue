<template>
  <div class="text-right">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon> mdi-pencil </v-icon> Edit
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">New Post</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Title"
                    required
                    v-model="propObj.title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Description"
                    required
                    v-model="propObj.description"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="editPost(post.id), (dialog = false)"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: {
    propObj: {
      type: Object,
      required: false,
      default: function () {
        return {
          id: "",
          title: "",
          description: "",
        };
      },
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    closeDialog: function () {
      this.dialog = false;
    },
    editPost: function (id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>