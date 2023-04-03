import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber"
import Cylinder from './components/Cylinder';
import { useState } from 'react';


function App() {
  const [position,lightMove] = useState([10, 10, 10])
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight);
  // document.body.appendChild( renderer.domElement );
  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );
  // camera.position.z = 5;

  // // setInterval(()=>{
  // //   renderer.render( scene, camera );
  // //   cube.rotation.x += 0.05;
  // //   cube.rotation.y += 0.05;
  // //   cube.rotation.z += 0.05;
  // // },60);
  
  // function animate() {
  //   requestAnimationFrame( animate );
  //   renderer.render( scene, camera );
  //   cube.rotation.x += 0.05;
  //   cube.rotation.y += 0.05;
  //   cube.rotation.z += 0.05;
  // }
  // animate();    
  return (
    <div className="App">
      <Canvas>        	
      <pointLight position={position} />
      <ambientLight intensity={1} color={"red"}/>
      <Cylinder position={[-1.2, 0, 0]} cameraXFunction={lightMove}/>
      {/* <Cylinder position={[1.2, 0, 0]} cameraXFunction={lightMove}/> */}
      </Canvas>
    </div>
  );
}

export default App;
