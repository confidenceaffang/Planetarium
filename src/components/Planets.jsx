/*import React from "react";*/

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import mecury from "../assets/mecury.jpg";
import venus from "../assets/venus.jpg";
import earth from "../assets/earth_day.jpg";
import mars from "../assets/mars.jpg";
import jupiter from "../assets/jupiter.jpg";
import saturn from "../assets/saturn.jpg";
import neptune from "../assets/neptune.jpg";
import uranus from "../assets/uranus.jpg";
import saturn_ring from "../assets/sat_ring.png";

const Mecury = () => {
  const texture = useLoader(THREE.TextureLoader, mecury);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Venus = () => {
  const texture = useLoader(THREE.TextureLoader, venus);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 42, 42]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Earth = () => {
  const texture = useLoader(THREE.TextureLoader, earth);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 42, 42]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Mars = () => {
  const texture = useLoader(THREE.TextureLoader, mars);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 15]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 40, 40]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Jupiter = () => {
  const texture = useLoader(THREE.TextureLoader, jupiter);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight positon={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 90, 90]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Saturn = () => {
  const texture = useLoader(THREE.TextureLoader, saturn);
  const texture2 = useLoader(THREE.TextureLoader, saturn_ring);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 90, 90]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 2, 128, 16]} />
          <meshStandardMaterial
            map={texture2}
            side={THREE.DoubleSide}
            transparent={true}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const Uranus = () => {
  const texture = useLoader(THREE.TextureLoader, uranus);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight positon={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 90, 90]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
const Neptune = () => {
  const texture = useLoader(THREE.TextureLoader, neptune);
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1} />
        <pointLight positon={[10, 10, 10]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1, 90, 90]} />
          <meshStandardMaterial map={texture} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const Planets = () => {
  return (
    <div>
      <Mecury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
    </div>
  );
};

export default Planets;
