import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.css']
})
export class WaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var container =  document.getElementsByClassName('wave')[0];
    var renderer = new THREE.WebGLRenderer();
    const loader = new OBJLoader();
    renderer.setSize( window.innerWidth, window.innerHeight/2 );
    // console.log(container);
    if(container)
      container.appendChild( renderer.domElement );
    // load a resource
    loader.load(
      // resource URL
      '../../assets/3d/fox.obj',
      // called when resource is loaded
      function ( object ) {

        scene.add( object );

      },
      // called when loading is in progresses
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

        console.log( 'An error happened' );

      }
    );

    
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      renderer.render( scene, camera );
    };
    animate();
  }

}
