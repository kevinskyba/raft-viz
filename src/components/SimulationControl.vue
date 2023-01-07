<template>
  <v-card class="root" width="600">
    <v-tabs
        v-model="tab"
        fixed-tabs
    >
      <v-tab value="tab-0">
        Control
      </v-tab>
      <!--
      <v-tab value="tab-1">
        Options
      </v-tab>
      -->
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item key="0" value="tab-0">
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                <v-btn-toggle mandatory class="w-100 h-100" shaped v-model="run">
                    <v-btn value="true" class="w-50 h-100">Run</v-btn>
                    <v-btn value="false" class="w-50 h-100">Pause</v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col>
                <v-btn class="w-100 h-100" @click="onResetClicked">Reset</v-btn>
              </v-col>
              <v-col>
                <v-text-field
                    class="w-100 h-100"
                    v-model="ticks"
                    label="Tick"
                    readonly
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col>
                <span>Speed:</span>
              </v-col>
              <v-col cols="9">
                <v-slider show-ticks="always" min="0.1" max="2.0" step="0.1" v-model="speed"></v-slider>
              </v-col>
              <v-col>
                <span v-text="speed.toString() + 'x'"></span>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-window-item>
      <v-window-item key="1" value="tab-1">
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                    class="w-100 h-100"
                    v-model="clients"
                    :rules="[clientRules.min, clientRules.max]"
                    type="number"
                    label="Number of clients"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import RaftSimulation from "@/raft/raft-simulation";

export default {
  name: "SimulationControl",

  mounted() {
    RaftSimulation.reset(5);

    this.$data.fpsInterval = 1000 / this.fps;
    this.$data.then = Date.now();
    this.$data.startTime = this.$data.then;

    requestAnimationFrame(this.tick)
  },

  data() {
      return {
        tab: null,
        run: "false",
        ticks: 0,
        clients: 3,
        speed: 0.5,

        fpsInterval: 0,
        fps: 30,
        then: 0,
        startTime: 0,

        clientRules: {
          min: v => v > 0 || "Greater than 0",
          max: v => v < 10 || "Less than 10"
        }
      }
  },

  watch: {
    clients: function(val) {
      if (val > 0 && val < 10) {
        RaftSimulation.reset(val);
      }
    }
  },

  methods: {
    tick: function() {
      let now = Date.now();
      let elapsed = now = this.$data.then;

      if (elapsed > this.fpsInterval) {
        this.$data.then = now - (elapsed % this.fpsInterval);

        if (this.run === "true")
          RaftSimulation.update(0.1 * this.speed);
        this.$data.ticks = RaftSimulation.data().tick;
      }

      requestAnimationFrame(this.tick);
    },
    onResetClicked: function() {
      RaftSimulation.reset(this.clients);
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