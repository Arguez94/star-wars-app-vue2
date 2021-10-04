<template>
  <div>
    <v-card v-if="people">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="people.data.results"
        :search="search"
        :server-items-length="people.data.count"
        @click:row="handleClick"
      ></v-data-table>
    </v-card>

    <h1 v-else>
      <v-progress-circular color="primary"></v-progress-circular>
    </h1>

    <div v-if="showModal && this.urlPerson">
      <PersonDetail
        v-show="showModal && this.urlPerson"
        @close="closeModal"
        :url="this.urlPerson"
      />
    </div>

    <br />
  </div>
</template>

<script>
import axios from "axios";
import PersonDetail from "./PersonDetail.vue";
import Vue from "vue";

Vue.component("PersonDetail", {
  template: "#modal-person",
});

export default {
  name: "People",
  data: () => ({
    people: null,
    search: "",
    headers: [
      { text: "Name", value: "name" },
      { text: "Gender", value: "gender" },
      { text: "Height", value: "height" },
      { text: "Mass", value: "mass" },
      { text: "Hair Color", value: "hair_color" },
      { text: "Skin Color", value: "skin_color" },
      { text: "Eye Color", value: "eye_color" },
      { text: "Birth Year", value: "skin_color" },
    ],
    showModal: false,
    urlPerson: null,
  }),
  props: {},
  methods: {
    updatePagination(pagination) {
      console.log("update:pagination", pagination);
    },
    handleClick(value) {
      this.showModal = true;
      this.urlPerson = value.url;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    PersonDetail,
  },

  async created() {
    this.people = await axios.get("https://swapi.dev/api/people");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
