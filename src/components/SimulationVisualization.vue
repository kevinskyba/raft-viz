<template>
  <div oncontextmenu="return false;"></div>
</template>

<script>
import Pencil from "pencil.js";
import NodeVisualization from "@/components/VisualizationElements/NodeVisualization";
import NodeLayout from "@/components/VisualizationElements/NodeLayout";
import CenterLayout from "@/components/VisualizationElements/CenterLayout";
import NodeConnection from "@/components/VisualizationElements/NodeConnection";
import RaftSimulation from "@/raft/raft-simulation";
import MessageVisualization from "@/components/VisualizationElements/MessageVisualization";

export default {
  name: "SimulationVisualization",
  components: {

  },

  data() {
    return {
      nodeLayout: null,
      centerLayout: null,
      centerLineLayout: null,
      centerMessageLayout: null,
      scene: null
    }
  },

  mounted() {
    RaftSimulation.on("data", this.onDataUpdated);
    RaftSimulation.on("reset", this.onReset);

    const container = this.$el;
    this.scene = new Pencil.Scene(container, this.options);

    this.setup();
  },

  unmounted() {
    RaftSimulation.removeListener("data", this.onDataUpdated);
    this.scene.delete();
    this.scene.empty();
  },

  methods: {
    getNodeVisualizationByNodeName(name) {
      return this.nodeLayout.children.find(child => child.nodeName === name);
    },

    getMsgVisualizationByUUID(uuid) {
      return this.centerMessageLayout.children.find(child => child.uuid === uuid);
    },

    setup: function () {
      this.centerLineLayout = new CenterLayout();
      this.scene.add(this.centerLineLayout);

      this.centerNodeLayout = new CenterLayout();
      this.nodeLayout = new NodeLayout();
      this.centerNodeLayout.add(this.nodeLayout);
      this.scene.add(this.centerNodeLayout);

      this.centerMessageLayout = new CenterLayout();
      this.scene.add(this.centerMessageLayout);

      this.scene.startLoop();
    },

    onReset: function() {
      if (this.scene) this.scene.empty();
      this.setup();
    },

    onDataUpdated: function(data) {
      // Synchronize Nodes
      data.nodes.forEach(node => {

        // Find nodeVisualization or create
        let nodeVisualization = this.getNodeVisualizationByNodeName(node.name);
        if (!nodeVisualization) {
          nodeVisualization = new NodeVisualization();
          nodeVisualization.on("mousedown", () => {
            RaftSimulation.toggleNode(nodeVisualization.nodeName);
          });
          this.nodeLayout.add(nodeVisualization);
          console.debug("Created new nodeVisualization");
        }

        nodeVisualization.nodeName = node.name;
        nodeVisualization.stateName = node.state
        nodeVisualization.timelinePercentage = node.progress;
      });

      // Synchronize Node Connections
      data.nodes.forEach(node => {

        // Find nodeConnections or create
        data.nodes.forEach(otherNode => {
          if (otherNode === node) return;
          let nodeConnection = this.centerLineLayout.children.find(
              child => (child.nodeA.name === node.name && child.nodeB.name === otherNode.name)
                  || (child.nodeB.name === node.name && child.nodeA.name === otherNode.name));
          if (!nodeConnection) {
            nodeConnection = new NodeConnection(this.getNodeVisualizationByNodeName(node.name),
                this.getNodeVisualizationByNodeName(otherNode.name), node, otherNode);
            this.centerLineLayout.add(nodeConnection);
            console.debug("Created new nodeConnection");
          }
        });

      });

      let tbd = []
      // Synchronize Messages
      this.centerMessageLayout
          .children
          .forEach(msgViz => {
            if (data.packets.find(packet => packet.id === msgViz.uuid) === undefined) {
              tbd.push(msgViz);
            }
          });
      tbd.forEach((viz) => viz.delete());

      data.packets.forEach(packet => {
        let msgViz = this.getMsgVisualizationByUUID(packet.id);
        if (!msgViz) {
          msgViz = new MessageVisualization(packet.id,
              this.getNodeVisualizationByNodeName(packet.source),
              this.getNodeVisualizationByNodeName(packet.destination));
          this.centerMessageLayout.add(msgViz);
          console.debug("Created new msgViz");
        }

        msgViz.messageName = packet.payload.type;
        msgViz.progress = packet.progress;
      });
    }
  }
}
</script>

<style scoped>
  div {
    min-height: 100vh;
    min-width: 100%;
  }
</style>