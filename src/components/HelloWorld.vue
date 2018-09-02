<template>
  <div class="hello">
    <!-- <div id="canvas-frame"></div> -->
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    },
  mounted() {
    // var renderer, width, height;
    // function initThree() {
    //     width = window.document.getElementById('canvas-frame').clientWidth;
    //     height = window.document.getElementById('canvas-frame').clientHeight;
    //     renderer = new THREE.WebGLRenderer({
    //         antialias : true
    //     });
    //     renderer.setSize(width, height);
    //     window.document.getElementById('canvas-frame').appendChild(renderer.domElement);
    //     renderer.setClearColor(0xFFFFFF, 1.0);
    // }

    // var camera;
    // function initCamera() {
    //     camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    //     camera.position.x = 0;
    //     camera.position.y = 1000;
    //     camera.position.z = 0;
    //     camera.up.x = 0;
    //     camera.up.y = 0;
    //     camera.up.z = 1;
    //     camera.lookAt({
    //         x : 0,
    //         y : 0,
    //         z : 0
    //     });
    // }

    // var scene;
    // function initScene() {
    //     scene = new THREE.Scene();
    // }

    // var light;
    // function initLight() {
    //     light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    //     light.position.set(100, 100, 200);
    //     scene.add(light);
    // }

    // var cube;
    // function initObject() {

    //     var material = new THREE.LineBasicMaterial({
    //       color: 0x0000ff
    //     });

    //     var geometry = new THREE.Geometry();
    //     geometry.vertices.push(
    //       new THREE.Vector3( -10, 0, 0 ),
    //       new THREE.Vector3( 0, 10, 0 ),
    //       new THREE.Vector3( 10, 0, 0 )
    //     );

    //     var line = new THREE.Line( geometry, material );
    //     scene.add( line );
    // }
    // function render()
    // {
    //     renderer.clear();
    //     renderer.render(scene, camera);
    //     requestAnimationFrame(render);
    // }
    // function threeStart() {
    //     initThree();
    //     initCamera();
    //     initScene();
    //     // initLight();
    //     initObject();
    //     render();
    // }
    // threeStart();
    var scene = new THREE.Scene(); // 场景
    
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); // 透视相机
    
    var renderer = new THREE.WebGLRenderer(); // 渲染器
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    window.document.body.appendChild(renderer.domElement);
    var geometry = new THREE.CubeGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    var material = new THREE.LineBasicMaterial({
      color: 0x0000ff
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3( -10, 0, 0 ),
      new THREE.Vector3( 0, 10, 0 ),
      new THREE.Vector3( 10, 0, 0 )
    );

    var line = new THREE.Line( geometry, material );
    scene.add( line );
    camera.position.z = 5;
    function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
    }
    render();
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
