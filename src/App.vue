<template>
  <v-app>
    <SimulationVisualization/>
    <SimulationControl/>
  </v-app>
</template>

<script>
//import SimulationControl from "@/components/SimulationControl";

import SimulationControl from "@/components/SimulationControl";
import SimulationVisualization from "@/components/SimulationVisualization";
export default {
  name: 'App',
  components: {
    SimulationVisualization,
    SimulationControl
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
