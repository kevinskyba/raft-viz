(function(){"use strict";var t={7256:function(t,e,i){var s=i(9963),n=i(1291),a=i(9985),o=i.n(a),r=(i(6375),i(6252)),h=i(6490);function l(t,e,i,s,n,a){const o=(0,r.up)("SimulationVisualization"),l=(0,r.up)("SimulationControl");return(0,r.wg)(),(0,r.j4)(h.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o),(0,r.Wm)(l)])),_:1})}var d=i(3577),u=i(2337),c=i(9582),m=i(5091),p=i(1669),f=i(9003),w=i(3379),g=i(3505),T=i(9645),x=i(3345),_=i(5308),v=i(2199),k=i(4550);const y=t=>((0,r.dD)("data-v-5c3d343c"),t=t(),(0,r.Cn)(),t),Z=y((()=>(0,r._)("span",null,"Speed:",-1))),b=["textContent"];function S(t,e,i,s,n,a){return(0,r.wg)(),(0,r.j4)(m._,{class:"root",width:"600"},{default:(0,r.w5)((()=>[(0,r.Wm)(T.d,{modelValue:n.tab,"onUpdate:modelValue":e[0]||(e[0]=t=>n.tab=t),"fixed-tabs":""},{default:(0,r.w5)((()=>[(0,r.Wm)(x.L,{value:"tab-0"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Control ")])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(v.Oo,{modelValue:n.tab,"onUpdate:modelValue":e[5]||(e[5]=t=>n.tab=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(k.H,{key:"0",value:"tab-0"},{default:(0,r.w5)((()=>[(0,r.Wm)(m._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c.f,{mandatory:"",class:"w-100 h-100",shaped:"",modelValue:n.run,"onUpdate:modelValue":e[1]||(e[1]=t=>n.run=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(u.T,{value:"true",class:"w-50 h-100"},{default:(0,r.w5)((()=>[(0,r.Uk)("Run")])),_:1}),(0,r.Wm)(u.T,{value:"false",class:"w-50 h-100"},{default:(0,r.w5)((()=>[(0,r.Uk)("Pause")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,r.Wm)(w.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u.T,{class:"w-100 h-100",onClick:a.onResetClicked},{default:(0,r.w5)((()=>[(0,r.Uk)("Reset")])),_:1},8,["onClick"])])),_:1}),(0,r.Wm)(w.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_.hw,{class:"w-100 h-100",modelValue:n.ticks,"onUpdate:modelValue":e[2]||(e[2]=t=>n.ticks=t),label:"Tick",readonly:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,r.Wm)(p.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w.D,null,{default:(0,r.w5)((()=>[Z])),_:1}),(0,r.Wm)(w.D,{cols:"9"},{default:(0,r.w5)((()=>[(0,r.Wm)(g.R,{"show-ticks":"always",min:"0.1",max:"2.0",step:"0.1",modelValue:n.speed,"onUpdate:modelValue":e[3]||(e[3]=t=>n.speed=t)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(w.D,null,{default:(0,r.w5)((()=>[(0,r._)("span",{textContent:(0,d.zw)(n.speed.toString()+"x")},null,8,b)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(k.H,{key:"1",value:"tab-1"},{default:(0,r.w5)((()=>[(0,r.Wm)(m._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(_.hw,{class:"w-100 h-100",modelValue:n.clients,"onUpdate:modelValue":e[4]||(e[4]=t=>n.clients=t),rules:[n.clientRules.min,n.clientRules.max],type:"number",label:"Number of clients"},null,8,["modelValue","rules"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var D=i(7327);i(7658);class L{constructor(t,e){(0,D.Z)(this,"start",0),(0,D.Z)(this,"duration",0),(0,D.Z)(this,"meta",{}),this.start=t,this.duration=e}reset(t){this.start=t}timeLeft(t){return this.start+this.duration-t}isDue(t){return this.timeLeft(t)<=0}}function N(t,e){return t+Math.floor(Math.random()*(e-t))}const V=i(7187);class C extends V{constructor(t,e){super(),(0,D.Z)(this,"time",0),(0,D.Z)(this,"networkSimulation",null),(0,D.Z)(this,"id",""),(0,D.Z)(this,"peers",[]),(0,D.Z)(this,"currentTerm",0),(0,D.Z)(this,"votedFor",null),(0,D.Z)(this,"votesReceived",0),(0,D.Z)(this,"electionTimer",null),(0,D.Z)(this,"voteTimer",null),(0,D.Z)(this,"state",1),this.networkSimulation=e,this.id=t,this.networkSimulation.addReceiveCallback(this.id,this._onReceive.bind(this)),this._startCandidate()}_onReceive(t,e){if(3!==this.state&&(t.term>this.currentTerm&&this._startFollow(t.term),!(t.term<this.currentTerm)))switch(t.leader&&this._startFollow(t.term),t.type){case"requestVote":null===this.votedFor?(this.votedFor=t.candidate,this.send({type:"replyVote",leader:0===this.state,term:t.term,granted:!0},e),this.electionTimer&&this.electionTimer.reset(this.time)):this.send({type:"replyVote",leader:0===this.state,term:t.term,granted:!1},e);break;case"replyVote":if(1!==this.state)return;if(!t.granted)return;this.votesReceived++,this.votesReceived>Math.round(this.peers.length/2)&&this._startLeader();break;case"append":2!==this.state&&this._startFollow(t.term),this.pingTimer&&this.pingTimer.reset(this.time)}}startStopped(){this.setState(3),this.electionTimer=null,this.pingTimer=null,this.votedFor=null,this.currentTerm=0}startCandidate(){this._startCandidate()}_startFollow(t){this.setState(2),this.electionTimer=null,this.pingTimer=null,this.currentTerm=t,this.votedFor=null}_startCandidate(){this.votedFor=null,this.pingTimer=null,this.setState(1)}_startLeader(){this.votedFor=null,this.pingTimer=null,this.electionTimer=null,this.setState(0)}update(t){let e=Math.round(this.time);if(this.time+=t,Math.round(this.time)!==e)switch(this.state){case 1:this._updateCandidate();break;case 2:this._updateFollower();break;case 0:this._updateLeader()}}setState(t){this.state=t,this.emit("state change",t)}_updateCandidate(){null==this.electionTimer&&(this.electionTimer=new L(this.time,N(100,150)),this.electionTimer.meta.currentTerm=this.currentTerm),this.electionTimer.isDue(this.time)&&(this.electionTimer=null,this.currentTerm=this.currentTerm+1,this.votedFor=this.id,this.votesReceived=1,this.send({type:"requestVote",leader:0===this.state,term:this.currentTerm,candidate:this.id}))}_updateFollower(){null==this.electionTimer&&(this.electionTimer=new L(this.time,N(100,150)),this.electionTimer.meta.currentTerm=this.currentTerm),this.electionTimer.isDue(this.time)&&this._startCandidate()}_updateLeader(){null==this.pingTimer&&(this.pingTimer=new L(this.time,50)),this.pingTimer.isDue(this.time)&&(this.pingTimer=null,this._sendAppend())}_sendAppend(){this.send({type:"append",leader:0===this.state,term:this.currentTerm})}join(t){this.peers.push(t)}send(t,e=null){if(null==e)for(let i in this.peers)this.networkSimulation.write(this.id,this.peers[i],t,N(10,20));else this.networkSimulation.write(this.id,e,t,N(10,20))}}(0,D.Z)(C,"STATES",["LEADER","CANDIDATE","FOLLOWER","STOPPED"]);class E{constructor(){(0,D.Z)(this,"uuid",""),(0,D.Z)(this,"payload",{}),(0,D.Z)(this,"source",""),(0,D.Z)(this,"destination",""),(0,D.Z)(this,"send_tick",0),(0,D.Z)(this,"receive_tick",0),(0,D.Z)(this,"rpc_id",0)}}function A(){var t=(new Date).getTime(),e="undefined"!==typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(i){var s=16*Math.random();return t>0?(s=(t+s)%16|0,t=Math.floor(t/16)):(s=(e+s)%16|0,e=Math.floor(e/16)),("x"===i?s:3&s|8).toString(16)}))}class O{constructor(){(0,D.Z)(this,"receive_callbacks",{}),(0,D.Z)(this,"packets",[]),(0,D.Z)(this,"time",0)}reset(){this.packets=[],this.receive_callbacks={},this.tick=0}update(t){let e=Math.round(this.time);if(this.time+=t,Math.round(this.time)===e)return;let i=[];this.packets.forEach((t=>{t.receive_tick<=this.time&&(void 0!==this.receive_callbacks[t.destination]&&this.receive_callbacks[t.destination].forEach((e=>e(t.payload,t.source))),i.push(t))})),i.forEach((t=>this.packets.splice(this.packets.indexOf(t),1)))}write(t,e,i,s){let n=new E;return n.uuid=A(),n.payload=i,n.source=t,n.destination=e,n.send_tick=this.time,n.receive_tick=this.time+s,this.packets.push(n),console.debug(`Message from [${t}] to [${e}]`,i),n.rpc_id}addReceiveCallback(t,e){void 0===this.receive_callbacks[t]&&(this.receive_callbacks[t]=[]),this.receive_callbacks[t].push(e)}}const W=i(7187);class P extends W{constructor(){super(),(0,D.Z)(this,"time",0),(0,D.Z)(this,"tick",0),(0,D.Z)(this,"networkSimulation",null),(0,D.Z)(this,"clients",[]),(0,D.Z)(this,"dataCallbacks",[]),this.networkSimulation=new O,this.clients=[]}update(t){this.time+=t,this.networkSimulation.update(t),this.clients.forEach((e=>e.update(t))),this.onDataChanged()}onDataChanged(){this.emit("data",this.data())}data(){let t=[];this.clients.forEach((e=>{let i=0;e.electionTimer&&!e.electionTimer.isDue(this.time)&&(i=1-e.electionTimer.timeLeft(this.time)/e.electionTimer.duration),t.push({name:e.id,state:C.STATES[e.state],progress:i})}));let e=[];this.networkSimulation.packets.forEach((t=>{e.push({id:t.uuid,source:t.source,destination:t.destination,payload:t.payload,progress:1-(this.time-t.receive_tick)/(t.send_tick-t.receive_tick)})}));let i=Math.round(this.time);return{tick:i,nodes:t,packets:e}}toggleNode(t){let e=this.clients.find((e=>e.id===t));e&&(3===e.state?e.startCandidate():e.startStopped())}reset(t){delete this.clients,delete this.networkSimulation,this.time=0,this.networkSimulation=new O,this.clients=[],this.emit("reset",this.data());for(let e=0;e<t;e++){const t="Node_"+e.toString(),i=new C(t,this.networkSimulation);this.clients.push(i),i.on("state change",(()=>{this.emit("data",this.data())})),i.on("error",(t=>{console.log(i.address+" Error = "+t)})),i.on("vote",(t=>{console.log(i.address+" Vote = "+t.address)}))}this.clients.forEach((t=>{this.clients.forEach((e=>{t!==e&&t.join(e.id)}))})),this.emit("data",this.data())}}var R=new P,z={name:"SimulationControl",mounted(){R.reset(5),this.$data.fpsInterval=1e3/this.fps,this.$data.then=Date.now(),this.$data.startTime=this.$data.then,requestAnimationFrame(this.tick)},data(){return{tab:null,run:"false",ticks:0,clients:3,speed:.5,fpsInterval:0,fps:30,then:0,startTime:0,clientRules:{min:t=>t>0||"Greater than 0",max:t=>t<10||"Less than 10"}}},watch:{clients:function(t){t>0&&t<10&&R.reset(t)}},methods:{tick:function(){let t=Date.now(),e=t=this.$data.then;e>this.fpsInterval&&(this.$data.then=t-e%this.fpsInterval,"true"===this.run&&R.update(.1*this.speed),this.$data.ticks=R.data().tick),requestAnimationFrame(this.tick)},onResetClicked:function(){R.reset(this.clients)}}},M=i(3744);const F=(0,M.Z)(z,[["render",S],["__scopeId","data-v-5c3d343c"]]);var U=F;const B={oncontextmenu:"return false;"};function j(t,e,i,s,n,a){return(0,r.wg)(),(0,r.iD)("div",B)}var I=i(9526),$=i(9447),q=i(8406),H=i(9847),K=i(5699);class G extends $.Z{constructor(){super(),(0,D.Z)(this,"timelinePercentage",1),(0,D.Z)(this,"nodeName","Node"),(0,D.Z)(this,"stateName",""),(0,D.Z)(this,"STATE_COLORS",{LEADER:"#e7cf22",STOPPED:"#757575",DEFAULT:"#DDD"}),this.circle=new q.Z([0,0],100),this.circle.options.fill="#DDD",this.timelinePie=new H.Z([0,0],110),this.timelinePie.startAngle=0,this.timelinePie.options.fill="#fff",this.nameText=new K.Z([0,0],this.nodeName),this.nameText.options.fill="#000",this.nameText.options.fontSize=40,this.nameText.options.align=I.ZP.Text.alignments.center,this.nameText.options.lineHeight=1,this.stateText=new K.Z([0,0],this.nodeName),this.stateText.options.fill="#000",this.stateText.options.fontSize=12,this.stateText.options.bold=!0,this.stateText.options.align=I.ZP.Text.alignments.center,this.stateText.options.lineHeight=1,this.add(this.timelinePie),this.add(this.circle),this.add(this.nameText),this.add(this.stateText),this.on("draw",this._onDraw),this.timelinePercentage=.9}pulse(){const t={height:this.timelinePie.height,width:this.timelinePie.width};new(o().Tween)(t).to({height:120,width:120},1e3).yoyo(!0).repeat(1).easing(o().Easing.Sinusoidal.InOut).onUpdate((()=>{this.timelinePie.height=t.height,this.timelinePie.width=t.width})).start()}_onDraw(){this.timelinePie.endAngle=this.timelinePercentage,this.nameText.text=this.nodeName,this.nameText.options.origin.set(-this.nameText.getAlignOffset()*this.nameText.width,-this.nameText.height/2),this.stateText.text=this.stateName,this.stateText.options.origin.set(-this.stateText.getAlignOffset()*this.stateText.width,-this.stateText.height/2),this.stateText.position.set(0,this.nameText.height),this.STATE_COLORS[this.stateName]?this.circle.options.fill=this.STATE_COLORS[this.stateName]:this.circle.options.fill=this.STATE_COLORS["DEFAULT"]}}class J extends $.Z{constructor(){super(),this.on("draw",(()=>{const t=this.children.length,e=t>0?400:0,i=1/t;this.children.forEach(((t,s)=>{t.position=this.position.clone().add(e,0).rotate(i*s,this.position)}))}))}}var Q=i(8671);class X extends $.Z{constructor(){super(),this.on("draw",(()=>{this.position=new Q.Z(this.parent.position.x+this.parent.width/2,this.parent.position.y+this.parent.height/2)}))}}var Y=i(3467);class tt extends Y.Z{constructor(t,e,i,s){super([0,0],[new Q.Z]),(0,D.Z)(this,"nodeVizA",null),(0,D.Z)(this,"nodeVizB",null),(0,D.Z)(this,"nodeA",null),(0,D.Z)(this,"nodeB",null),this.nodeVizA=t,this.nodeVizB=e,this.nodeA=i,this.nodeB=s,this.options.stroke="#DDD",this.options.absolute=!0,this.on("draw",this._onDraw)}_onDraw(){this.position=this.nodeVizA.position,this.points=[this.nodeVizB.position]}}var et=i(1371);class it extends $.Z{constructor(t,e,i){super(),(0,D.Z)(this,"uuid",""),(0,D.Z)(this,"messageName","Msg"),(0,D.Z)(this,"progress",0),(0,D.Z)(this,"target_pos",new Q.Z),(0,D.Z)(this,"positionTween",null),this.uuid=t,this.from=e,this.to=i,this.box=new et.Z([0,0],120,60),this.box.options.fill="#c5bf9f",this.nameText=new K.Z([0,0],this.messageName),this.nameText.options.fill="#000",this.nameText.options.fontSize=18,this.nameText.options.align=I.ZP.Text.alignments.center,this.nameText.options.lineHeight=1,this.add(this.box),this.add(this.nameText),this.on("draw",this._onDraw)}_onDraw(){this.nameText.text=this.messageName,this.nameText.options.origin.set(-this.nameText.getAlignOffset()*this.nameText.width+this.box.width/2,-this.nameText.height/2+this.box.height/2),this.position=this.from.position.clone().add(this.to.position.clone().subtract(this.from.position).multiply(this.progress)).subtract(new Q.Z(this.box.width/2,this.box.height/2))}}var st={name:"SimulationVisualization",components:{},data(){return{nodeLayout:null,centerLayout:null,centerLineLayout:null,centerMessageLayout:null,scene:null}},mounted(){R.on("data",this.onDataUpdated),R.on("reset",this.onReset);const t=this.$el;this.scene=new I.ZP.Scene(t,this.options),this.setup()},unmounted(){R.removeListener("data",this.onDataUpdated),this.scene.delete(),this.scene.empty()},methods:{getNodeVisualizationByNodeName(t){return this.nodeLayout.children.find((e=>e.nodeName===t))},getMsgVisualizationByUUID(t){return this.centerMessageLayout.children.find((e=>e.uuid===t))},setup:function(){this.centerLineLayout=new X,this.scene.add(this.centerLineLayout),this.centerNodeLayout=new X,this.nodeLayout=new J,this.centerNodeLayout.add(this.nodeLayout),this.scene.add(this.centerNodeLayout),this.centerMessageLayout=new X,this.scene.add(this.centerMessageLayout),this.scene.startLoop()},onReset:function(){this.scene&&this.scene.empty(),this.setup()},onDataUpdated:function(t){t.nodes.forEach((t=>{let e=this.getNodeVisualizationByNodeName(t.name);e||(e=new G,e.on("mousedown",(()=>{R.toggleNode(e.nodeName)})),this.nodeLayout.add(e),console.debug("Created new nodeVisualization")),e.nodeName=t.name,e.stateName=t.state,e.timelinePercentage=t.progress})),t.nodes.forEach((e=>{t.nodes.forEach((t=>{if(t===e)return;let i=this.centerLineLayout.children.find((i=>i.nodeA.name===e.name&&i.nodeB.name===t.name||i.nodeB.name===e.name&&i.nodeA.name===t.name));i||(i=new tt(this.getNodeVisualizationByNodeName(e.name),this.getNodeVisualizationByNodeName(t.name),e,t),this.centerLineLayout.add(i),console.debug("Created new nodeConnection"))}))}));let e=[];this.centerMessageLayout.children.forEach((i=>{void 0===t.packets.find((t=>t.id===i.uuid))&&e.push(i)})),e.forEach((t=>t.delete())),t.packets.forEach((t=>{let e=this.getMsgVisualizationByUUID(t.id);e||(e=new it(t.id,this.getNodeVisualizationByNodeName(t.source),this.getNodeVisualizationByNodeName(t.destination)),this.centerMessageLayout.add(e),console.debug("Created new msgViz")),e.messageName=t.payload.type,e.progress=t.progress}))}}};const nt=(0,M.Z)(st,[["render",j],["__scopeId","data-v-d2a69e60"]]);var at=nt,ot={name:"App",components:{SimulationVisualization:at,SimulationControl:U}};const rt=(0,M.Z)(ot,[["render",l]]);var ht=rt;const lt=(0,n.Rd)({theme:{defaultTheme:"dark"}});function dt(t){o().update(t),requestAnimationFrame(dt)}requestAnimationFrame(dt);const ut=(0,s.ri)(ht);ut.use(lt).mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,a){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var r=!0,h=0;h<s.length;h++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](s[h])}))?s.splice(h--,1):(r=!1,a<o&&(o=a));if(r){t.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,o=s[0],r=s[1],h=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(h)var d=h(i)}for(e&&e(s);l<o.length;l++)a=o[l],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(d)},s=self["webpackChunkraft_viz"]=self["webpackChunkraft_viz"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(7256)}));s=i.O(s)})();
//# sourceMappingURL=app.2c8a9172.js.map