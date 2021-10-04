<template>
  <div v-if="url && planet" class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> {{ planet.data.name }} </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div>
            <div class="inline-block">Rotation Period:</div>
            <div class="inline-block">{{ planet.data.rotation_period }}</div>
          </div>

          <div>
            <div class="inline-block">Orbital period::</div>
            <div class="inline-block">{{ planet.data.orbital_period }}</div>
          </div>

          <div>
            <div class="inline-block">Diameter:</div>
            <div class="inline-block">{{ planet.data.diameter }}</div>
          </div>

          <div>
            <div class="inline-block">Gravity:</div>
            <div class="inline-block">{{ planet.data.gravity }}</div>
          </div>

          <div>
            <div class="inline-block">Terrain:</div>
            <div class="inline-block">{{ planet.data.terrain }}</div>
          </div>

          <div>
            <div class="inline-block">Surface Water:</div>
            <div class="inline-block">{{ planet.data.surface_water }}</div>
          </div>

          <div>
            <div class="inline-block">Population:</div>
            <div class="inline-block">{{ planet.data.population }}</div>
          </div>
        </slot>
      </section>
    </div>
  </div>

  <h1 v-else>
    <v-progress-circular color="primary"></v-progress-circular>
  </h1>
</template>

<script>
import axios from "axios";

export default {
  name: "PlanetDetail",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    url: String,
  },
  data: () => ({
    planet: null,
  }),
  async created() {
    this.planet = await axios.get(this.url);
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.inline.block {
  display: inline-block;
}
</style>