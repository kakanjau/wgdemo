import * as THREE from 'three';

var mixin = {
  data () {
    return {
      rendreer: undefined,
      width: undefined,
      height: undefined,
      camera: undefined,
      scene: undefined,
      light: undefined,
    }
  },
  mounted() {
    console.info('in mixin');
    this.init();
  },
  methods: {
    initThree() {
      this.width = document.getElementById('canvas-frame').clientWidth;
      this.height = document.getElementById('canvas-frame').clientHeight;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.width, this.height);
      document.getElementById('canvas-frame').appendChild(this.renderer.domElement);
      this.renderer.setClearColor(0xFFFFFF, 1.0);
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
      this.camera.position.set( 0, 0, 100 );
      this.camera.lookAt( 0, 0, 0 );
    },
    initScene() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color( 0xf0f0f0 );
    },
    initLight() {
      this.light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
      this.light.position.set(1, 1, 2);
      this.scene.add(this.light);
    },
    initAxis() {
      const geometryx = new THREE.Geometry();
      const geometryy = new THREE.Geometry();
      const geometryz = new THREE.Geometry();
      geometryx.vertices.push(new THREE.Vector3( -1000, 0, 0) );
      geometryy.vertices.push(new THREE.Vector3( 0, -1000, 0) );
      geometryz.vertices.push(new THREE.Vector3( 0, 0, -1000) );
      geometryx.vertices.push(new THREE.Vector3( 1000, 0, 0) );
      geometryy.vertices.push(new THREE.Vector3( 0, 1000, 0) );
      geometryz.vertices.push(new THREE.Vector3( 0, 0, 1000) );
      
      const xLine = new THREE.Line( geometryx, new THREE.LineBasicMaterial( { color: 'red', opacity: 0.2 } ));
      const yLine = new THREE.Line( geometryy, new THREE.LineBasicMaterial( { color: 'yellow', opacity: 0.2 } ));
      const zLine = new THREE.Line( geometryz, new THREE.LineBasicMaterial( { color: 'green', opacity: 0.2 } ));
      this.scene.add( xLine );
      this.scene.add( yLine );
      this.scene.add( zLine );
    },
    init() {
      this.initThree();
      this.initCamera();
      this.initScene();
      this.initAxis();
      // this.initLight();
    },
    createMesh(geometry) {
      const meshMaterial = new THREE.MeshBasicMaterial({
        color: 0xcccccc,
      });
      meshMaterial.side = THREE.DoubleSide;
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xcccccc,
      });
      wireframeMaterial.wireframe = true;
      const group = new THREE.Group();

			group.add( new THREE.Mesh( geometry, meshMaterial ));
			group.add( new THREE.Mesh( geometry, wireframeMaterial ));

		  return group;
    },
  }
};

export default mixin;