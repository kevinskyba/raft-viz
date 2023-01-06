<template>
  <v-card class="root" width="600" title="Simulation Control" text="..."></v-card>
</template>

<script>
import RaftSimulation from "@/services/raft-simulation";

export default {
  name: "SimulationControl",

  mounted() {
    RaftSimulation.reset(5);

    this.startTicks();
  },

  methods: {
    startTicks: function() {
      setInterval(() => {
        RaftSimulation.update();
      }, 10);
    }
  }
}
</script>

<style scoped>
  .root {
    position: absolute;
    bottom: 50px;
    right: 50px;
  }
</style>