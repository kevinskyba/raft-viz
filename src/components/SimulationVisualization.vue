<template>
  <div></div>
</template>

<script>
import Pencil, {} from "pencil.js";
import NodeVisualization from "@/components/VisualizationElements/NodeVisualization";
import NodeLayout from "@/components/VisualizationElements/NodeLayout";
import CenterLayout from "@/components/VisualizationElements/CenterLayout";
import NodeConnection from "@/components/VisualizationElements/NodeConnection";
import RaftSimulation from "@/services/raft-simulation";

export default {
  name: "SimulationVisualization",
  components: {

  },

  data() {
    return {
      nodeLayout: null,
      centerLayout: null,
      centerLineLayout: null,
      scene: null
    }
  },

  mounted() {
    RaftSimulation.addDataCallback(this.onDataUpdated);

    const container = this.$el.parentNode;
    this.scene = new Pencil.Scene(container, this.options);

    this.centerLineLayout = new CenterLayout();
    this.scene.add(this.centerLineLayout);

    this.centerNodeLayout = new CenterLayout();
    this.nodeLayout = new NodeLayout();
    this.centerNodeLayout.add(this.nodeLayout);
    this.scene.add(this.centerNodeLayout);


    this.scene.startLoop();
  },

  unmounted() {
    RaftSimulation.removeDataCallback(this.onDataUpdated);
    this.scene.delete();
    this.scene.empty();
  },

  methods: {
    getNodeVisualizationByNodeName(name) {
      return this.nodeLayout.children.find(child => child.nodeName === name);
    },

    onDataUpdated: function(data) {
      // Synchronize Nodes
      data.nodes.forEach(node => {

        // Find nodeVisualization or create
        let nodeVisualization = this.getNodeVisualizationByNodeName(node.name);
        if (!nodeVisualization) {
          nodeVisualization = new NodeVisualization();
          this.nodeLayout.add(nodeVisualization);
        }

        nodeVisualization.nodeName = node.name;
        nodeVisualization.stateName = node.state;
      });

      // Synchronize Node Connections

      data.nodes.forEach(node => {

        // Find nodeConnections or create
        data.nodes.forEach(otherNode => {
          if (otherNode === node) return;
          let nodeConnection = this.centerLineLayout.children.find(
              child => (child.nodeA === node && child.nodeB === otherNode) || (child.nodeB === node && child.nodeA === otherNode));
          if (!nodeConnection) {
            nodeConnection = new NodeConnection(this.getNodeVisualizationByNodeName(node.name),
                this.getNodeVisualizationByNodeName(otherNode.name));
            this.centerLineLayout.add(nodeConnection);
          }
        });

      });
    }
  }
}
</script>

<style scoped>

</style>