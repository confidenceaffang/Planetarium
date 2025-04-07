import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Robot = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let mixer;
    const clock = new THREE.Clock();
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(-5, 3, 10);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    // Load model
    const loader = new GLTFLoader();
    loader.load("/models/RobotExpressive.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      model.position.set(0, 0, 0);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      const action = mixer.clipAction(gltf.animations[1]); // Walking
      action.play();
    });

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.target.set(0, 1.5, 0);
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (renderer) {
        renderer.dispose();
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed bottom-4 left-4 z-10"
      style={{ width: 300, height: 300 }}
    />
  );
};

export default Robot;
