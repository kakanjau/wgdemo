<template>
  <div class="hello">
    <div id="canvas-frame"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import initThree from '../mixin/initThree';

export default {
  name: 'side',
  mixins: [initThree],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
  },
  mounted() {
    // console.info('in side');
    this.camera.position.set( 200, 100, 600 );
    this.initObject();
    const length = 10000;
    const g = new THREE.PlaneGeometry(length, length, 10, 10);
    const plant = this.createMesh(g);
    plant.position.set(length/2,0,-length/2);
    plant.rotation.x = - Math.PI / 2;
    this.scene.add(plant);
    this.renderer.clear();
    this.renderer.render( this.scene, this.camera );
  },
  methods: {
    initObject() {
      const box = new THREE.BoxGeometry(50, 50, 50);
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
      });
      const object = new THREE.Mesh(box, material);
      object.position.set(-50,50,30);
      this.scene.add(object);
    },
  }
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
