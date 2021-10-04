<template>
  <div v-if="url && starship" class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> {{ starship.data.name }} </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div>
            <div class="inline-block">Model:</div>
            <div class="inline-block">{{ starship.data.model }}</div>
          </div>

          <div class="inline-block">
            <div>Class:</div>
            <div>{{ starship.data.class }}</div>
          </div>

          <div class="inline-block">
            <div>Manufacturer:</div>
            <div>{{ starship.data.manufacturer }}</div>
          </div>

          <div class="inline-block">
            <div>Cost:</div>
            <div>{{ starship.data.cost_in_credits }}</div>
          </div>

          <div class="inline-block">
            <div>Length:</div>
            <div>{{ starship.data.length }}</div>
          </div>

          <div class="inline-block">
            <div>Max Speed:</div>
            <div>{{ starship.data.max_atmosphering_speed }}</div>
          </div>

          <div class="inline-block">
            <div>Crew:</div>
            <div>{{ starship.data.crew }}</div>
          </div>

          <div class="inline-block">
            <div>Passengers:</div>
            <div>{{ starship.data.passengers }}</div>
          </div>

          <div class="inline-block">
            <div>Cargo Capacity:</div>
            <div>{{ starship.data.cargo_capacity }}</div>
          </div>

          <div class="inline-block">
            <div>Consumables:</div>
            <div>{{ starship.data.consumables }}</div>
          </div>

          <div class="inline-block">
            <div>Hyperdrive Rating:</div>
            <div>{{ starship.data.hyperdrive_rating }}</div>
          </div>

          <div class="inline-block">
            <div>MGLT:</div>
            <div>{{ starship.data.mglt }}</div>
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
  name: "StarshipDetail",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    url: String,
  },
  data: () => ({
    starship: null,
  }),
  async created() {
    this.starship = await axios.get(this.url);
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