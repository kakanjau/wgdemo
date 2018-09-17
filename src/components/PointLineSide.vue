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
      const geometryx = new THREE.Geometry();
      const geometryy = new THREE.Geometry();
      const geometryz = new THREE.Geometry();
      geometryx.vertices.push(new THREE.Vector3( 0, 0, 0) );
      geometryy.vertices.push(new THREE.Vector3( 0, 0, 0) );
      geometryz.vertices.push(new THREE.Vector3( 0, 0, 0) );
      geometryx.vertices.push(new THREE.Vector3( 100, 0, 0) );
      geometryy.vertices.push(new THREE.Vector3( 0, 100, 0) );
      geometryz.vertices.push(new THREE.Vector3( 0, 0, 100) );
      
      const xLine = new THREE.Line( geometryx, new THREE.LineBasicMaterial( { color: 'red', opacity: 0.2 } ));
      const yLine = new THREE.Line( geometryy, new THREE.LineBasicMaterial( { color: 'yellow', opacity: 0.2 } ));
      const zLine = new THREE.Line( geometryz, new THREE.LineBasicMaterial( { color: 'green', opacity: 0.2 } ));
      this.scene.add( xLine );
      this.scene.add( yLine );
      this.scene.add( zLine );
      const L = 90;
      geometry.vertices.push(new THREE.Vector3( -L, 17, 0) );
      geometry.vertices.push(new THREE.Vector3( L, 17, 0) );
      for ( var i = 0; i <= 20; i ++ ) {
        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
        line.position.z = ( i * L/10 ) - L;
        this.scene.add( line );

        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
        line.position.x = ( i * L/10 ) - L;
        line.rotation.y = 90 * Math.PI / 180;
        this.scene.add( line );
      }
    },

    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
      this.camera.position.set( 100, 50, 100 );
      this.camera.lookAt( 0, 0, 0 );
    },
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
