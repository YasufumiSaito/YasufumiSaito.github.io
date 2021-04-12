import * as THREE from 'three';

export default class videoPlayer {
  constructor(el) {
    this.el = el;
    this.canvas = document.querySelector("canvas" + this.el)
    this.width = parseInt(this.canvas.offsetWidth)
    this.height = parseInt(this.canvas.offsetHeight)
    this.init();
  }
  init(){

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

    this.renderer = new THREE.WebGLRenderer({ antialias: true});
    // this.renderer.setClearColor(new THREE.Color("#2c3e50", 1.0) );
    this.renderer.setSize( this.width, this.height );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild( this.renderer.domElement );

    this.video = document.createElement( 'video' );
    this.video.src = "img/trade_big.mp4";
    this.video.muted = true;
    // this.video.autoplay = true;
    this.video.load(); // must call after setting/changing source    
    this.video.play();


    this.videoCanvasContext = this.canvas.getContext( '2d' );
    console.log(this)
    // background color if no video present
    this.videoCanvasContext.fillStyle = '#2c3e50';
    this.videoCanvasContext.fillRect( 0, 0, this.width, this.height );

    this.texture = new THREE.VideoTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    var movieMaterial = new THREE.MeshBasicMaterial({map: this.texture, overdraw:true, side:THREE.DoubleSide});
    var movieGeometry = new THREE.PlaneGeometry(10, 10, 4, 4);
    var movieScreen = new THREE.Mesh(movieGeometry, movieMaterial);
    movieScreen.rotation.y = THREE.Math.degToRad(90);

    this.scene.add(movieScreen);

    // if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
    //   this.videoCanvasContext.drawImage(this.video, 0, 0);
    //   console.log(this)
    //   if (this.texture) {
    //       this.texture.needsUpdate = true;
    //   }
    // }
    this.render();
    // this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
    // this.render();
  }
  render() {
    //check for vid data
    if(this.video.readyState === this.video.HAVE_ENOUGH_DATA){
      //draw video to canvas starting from upper left corner
      this.videoCanvasContext.drawImage(this.video, 0, 0);
      //tell texture object it needs to be updated
      this.texture.needsUpdate = true;
    }
    this.renderer.render(this.scene, this.camera);
  }
}