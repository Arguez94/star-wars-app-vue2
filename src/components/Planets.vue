<template>
  <div>
    <br />
    <v-card v-if="planets">
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
        :items="planets.data.results"
        :search="search"
        :server-items-length="planets.data.count"
        @click:row="handleClick"
        @update:pagination="updatePagination"
      ></v-data-table>
    </v-card>

    <h1 v-else>
      <v-progress-circular color="primary"></v-progress-circular>
    </h1>

    <div v-if="showModal && this.urlPlanet">
      <PlanetDetail
        v-show="showModal && this.urlPlanet"
        @close="closeModal"
        :url="this.urlPlanet"
      />
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import PlanetDetail from "./PlanetDetail.vue";
import Vue from "vue";

Vue.component("PlanetDetail", {
  template: "#modal-planet",
});

export default {
  name: "Planets",
  data: () => ({
    planets: null,
    search: "",
    headers: [
      { text: "Name", value: "name" },
      { text: "Rotation period", value: "rotation_period" },
      { text: "Orbital period", value: "orbital_period" },
      { text: "Diameter", value: "diameter" },
      { text: "Gravity", value: "gravity" },
      { text: "Terrain", value: "terrain" },
      { text: "Surface Water", value: "surface_water" },
      { text: "Population", value: "population" },
    ],
    showModal: false,
    urlPlanet: null,
  }),
  props: {},
  methods: {
    updatePagination(pagination) {
      console.log("update:pagination", pagination);
    },
    handleClick(value) {
      this.showModal = true;
      this.urlPlanet = value.url;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    PlanetDetail,
  },

  async created() {
    this.planets = await axios.get("https://swapi.dev/api/planets");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
