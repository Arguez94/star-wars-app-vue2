<template>
  <div>
    <v-tabs>
      <v-tab v-on:change="changeTabSelected(0)" href="#people">People</v-tab>
      <v-tab-item v-if="tabSelected === 0" value="people">
        <div class="padding10"><People /></div>
      </v-tab-item>
      <v-tab v-on:change="changeTabSelected(1)" href="#planets">Planets</v-tab>
      <v-tab-item v-if="tabSelected === 1" value="planets">
        <div class="padding10"><Planets /></div>
      </v-tab-item>
      <v-tab v-on:change="changeTabSelected(2)" href="#starships"
        >Starships</v-tab
      >
      <v-tab-item v-if="tabSelected === 2" value="starships">
        <div class="padding10"><Starships /></div
      ></v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import People from "./People.vue";
import Planets from "./Planets.vue";
import Starships from "./Starships.vue";

export default {
  name: "Home",
  data: () => ({
    tabSelected: 0,
  }),
  components: {
    People,
    Planets,
    Starships,
  },
  result: null,
  methods: {
    changeTabSelected(id) {
      this.tabSelected = id;
    },
  },
};
</script>

<style scoped>
</style>
