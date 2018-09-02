<template>
  <div class="hello">
    <div id="canvas-frame"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import initThree from '../mixin/initThree';

let renderer;
export default {
  name: 'HelloWorld',
  mixins: [initThree],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
  },
  mounted() {
    console.info('in 2-1');
    this.initObject();
    this.renderer.clear();
    this.renderer.render( this.scene, this.camera );
  },
  methods: {
    initObject() {
      const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
      const geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
      geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
      geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
      const line = new THREE.Line( geometry, material );
      this.scene.add( line );
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#canvas-frame {
  border: none;
  cursor: pointer;
  width: 100%;
  height: 600px;
  background-color: #EEEEEE;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
