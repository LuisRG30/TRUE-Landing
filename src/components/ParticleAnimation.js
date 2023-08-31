import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ParticleAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a new scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a particle system
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      const z = Math.random() * 100 - 50;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 0.2, vertexColors: true });
    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Animate the particle system
    function animate() {
      requestAnimationFrame(animate);

      // Move the particles around randomly
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += Math.random() * 0.1 - 0.05;
        positions[i * 3 + 1] += Math.random() * 0.1 - 0.05;
        positions[i * 3 + 2] += Math.random() * 0.1 - 0.05;
      }
      geometry.attributes.position.needsUpdate = true;

      // Render the scene
      renderer.render(scene, camera);
    }

    animate();

    // Clean up the scene when the component unmounts
    return () => {
      scene.remove(particleSystem);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />
  );
}

export default ParticleAnimation;
