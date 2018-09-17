<template>
  <div class="hello">
    <div id="canvas-frame"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { NURBSCurve } from '@/utils/three/curve/nurbsCurve';
import { NURBSSurface } from '@/utils/three/curve/nurbsSurface';
import initThree from '../mixin/initThree';

export default {
  name: 'curve-nurbs',
  mixins: [initThree],
  data() {
    return {
      group: undefined,
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
  },
  mounted() {    
    console.info('in 2-2');
    this.scene.add( new THREE.AmbientLight( 0x808080 ) );
    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 1, 1 );
    this.scene.add( light );
    this.initObject();
    this.renderer.clear();
    this.renderer.render( this.scene, this.camera );
  },
  methods: {
    initObject() {
      this.group = new THREE.Group();
      this.group.position.y = 50;
      this.scene.add(this.group);

      const nurbsControlPoints = [];
      const nurbsKnots = [0,0,0,0];
      const nurbsDegree = 3;

      const Base1 = 400;
      const Base2 = 200;
      Array(20).fill(undefined).forEach((i, idx) => {
        nurbsControlPoints.push(
          new THREE.Vector4(
            Math.random() * Base1 - Base2,
            Math.random() * Base1,
            Math.random() * Base1 - Base2,
            1
          )
        );

        var knot = (idx + 1) / (20 - nurbsDegree);
        nurbsKnots.push(THREE.Math.clamp( knot, 0 ,1));
      });

      const nurbsCurve = new NURBSCurve(nurbsDegree, nurbsKnots, nurbsControlPoints);
      const nurbsGeometry = new THREE.BufferGeometry();
      nurbsGeometry.setFromPoints(nurbsCurve.getPoints(200));
      const nurbsMaterial = new THREE.LineBasicMaterial({linewidth: 10, color: 0x333333});
      const nurbsLine = new THREE.Line(nurbsGeometry, nurbsMaterial);
      nurbsLine.position.set(200, -100, 0);
      this.group.add(nurbsLine);

      const nurbsControlPointsGeometry = new THREE.BufferGeometry();
      nurbsControlPointsGeometry.setFromPoints(nurbsCurve.controlPoints);
      const nurbsControlPointsMaterial = new THREE.LineBasicMaterial({linewidth: 2, color: 0x333333, opacity: 0.25, transparent: true});
      const nurbsControlPointsLine = new THREE.Line(nurbsControlPointsGeometry, nurbsControlPointsMaterial);
      nurbsControlPointsLine.position.copy(nurbsLine.position);
      this.group.add(nurbsControlPointsLine);

      const nsControlPoints = [
        [
          new THREE.Vector4(-200, -200, 100, 1),
          new THREE.Vector4(-200, -100, -200, 1),
          new THREE.Vector4(-200, 100, 250, 1),
          new THREE.Vector4(-200, 200, -100, 1),
        ],
        [
          new THREE.Vector4 ( 0, -200, 0, 1 ),
          new THREE.Vector4 ( 0, -100, -100, 5 ),
          new THREE.Vector4 ( 0, 100, 150, 5 ),
          new THREE.Vector4 ( 0, 200, 0, 1 )
        ],
        [
          new THREE.Vector4 ( 200, -200, -100, 1 ),
          new THREE.Vector4 ( 200, -100, 200, 1 ),
          new THREE.Vector4 ( 200, 100, -250, 1 ),
          new THREE.Vector4 ( 200, 200, 100, 1 )
        ]
      ];

      const degree1 = 2;
      const degree2 = 3;
      const knots1 = [0, 0, 0, 1, 1, 1];
      const knots2 = [0, 0, 0, 0, 1, 1, 1, 1];
      const nurbsSurface = new NURBSSurface(degree1, degree2, knots1, knots2, nsControlPoints);

      const map = new THREE.TextureLoader().load('textures/UV_Grid_Sm.jpg');
      map.warpS = map.warpT = THREE.RepeatWrapping;
      map.anisotropy = 16;

      // function getSurfacePoint(u, v, target) {
      //   return nurbsSurface.getPoint(u, v, target);
      // }

      // const geometry = new THREE.ParametricBufferGeometry( getSurfacePoint, 20, 20 );
      const geometry = new THREE.BoxGeometry( 20, 20, 20 );
      const material = new THREE.MeshBasicMaterial( { map: map } );
      const object = new THREE.Mesh( geometry, material );
      object.position.set( 0, -50, 0 );
      object.scale.multiplyScalar( 1 );
      this.group.add( object );
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#canvas-frame {
  border: none;
  cursor: pointer;
  width: 600px;
  height: 400px;
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
