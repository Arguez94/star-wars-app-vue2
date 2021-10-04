<template>
  <div v-if="url && person" class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> {{ person.data.name }} </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div>
            <div class="inline-block">Birth Year:</div>
            <div class="inline-block">{{ person.data.birth_year }}</div>
          </div>

          <div class="inline-block">
            <div>Gender:</div>
            <div>{{ person.data.gender }}</div>
          </div>

          <div class="inline-block">
            <div>Height:</div>
            <div>{{ person.data.height }}</div>
          </div>

          <div class="inline-block">
            <div>Mass:</div>
            <div>{{ person.data.mass }}</div>
          </div>

          <div class="inline-block">
            <div>Hair Color:</div>
            <div>{{ person.data.hair_color }}</div>
          </div>

          <div class="inline-block">
            <div>Skin color:</div>
            <div>{{ person.data.skin_color }}</div>
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
  name: "PersonDetail",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    url: String,
  },
  data: () => ({
    person: null,
  }),
  async created() {
    this.person = await axios.get(this.url);
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