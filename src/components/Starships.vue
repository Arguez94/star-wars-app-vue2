<template>
  <div>
    <br />
    <v-card v-if="starships">
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
        :items="starships.data.results"
        :search="search"
        :server-items-length="starships.data.count"
        @click:row="handleClick"
      ></v-data-table>
    </v-card>

    <div v-if="showModal && this.urlStarship">
      <StarshipDetail
        v-show="showModal && this.urlStarship"
        @close="closeModal"
        :url="this.urlStarship"
      />
    </div>

    <h1 v-else>
      <v-progress-circular color="primary"></v-progress-circular>
    </h1>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import StarshipDetail from "./StarshipDetail.vue";

Vue.component("StarshipDetail", {
  template: "#modal-starship",
});

export default {
  name: "Starships",
  data: () => ({
    starships: null,
    search: "",
    headers: [
      { text: "Name", value: "name" },
      { text: "Model", value: "model" },
      { text: "Class", value: "starship_class" },
      { text: "Manufacturer", value: "manufacturer" },
      { text: "Cost", value: "cost_in_credits" },
      { text: "Length", value: "length" },
      { text: "Max Speed", value: "max_atmosphering_speed" },
      { text: "Crew", value: "crew" },
      { text: "Passengers", value: "passengers" },
      { text: "Cargo Capacity", value: "cargo_capacity" },
      { text: "Consumables", value: "consumables" },
      { text: "Hyperdrive rating", value: "hyperdrive_rating" },
      { text: "MGLT", value: "mglt" },
    ],
    showModal: false,
    urlStarship: null,
  }),
  methods: {
    updatePagination(pagination) {
      console.log("update:pagination", pagination);
    },
    handleClick(value) {
      this.showModal = true;
      this.urlStarship = value.url;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    StarshipDetail,
  },
  props: {},

  async created() {
    this.starships = await axios.get("https://swapi.dev/api/starships");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
