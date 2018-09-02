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
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 500);
      this.camera.position.set( 0, 0, 100 );
      this.camera.lookAt( 0, 0, 0 );
    },
    initScene() {
      this.scene = new THREE.Scene();
    },
    initLight() {
      this.light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
      this.light.position.set(100, 100, 200);
      this.scene.add(this.light);
    },
    init() {
      this.initThree();
      this.initCamera();
      this.initScene();
      // this.initLight();
    }
  }
};

export default mixin;