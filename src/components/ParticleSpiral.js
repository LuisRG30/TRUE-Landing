import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls separately
import TWEEN from '@tweenjs/tween.js';

const ParticleSpiral = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Add OrbitControls to the scene
    const controls = new OrbitControls(camera, renderer.domElement);

    // Define Fibonacci spiral parameters
    const phi = (1 + Math.sqrt(5)) / 2;
    const spiralDensity = 0.05;
    const spiralRadius = 10;

    // Create particles
    const particleGeometry = new THREE.SphereGeometry(0.2, 10, 10);
    const particleMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const particles = [];

    for (let i = 1; i < 2000; i++) {
      const angle = i * spiralDensity * Math.PI * 2;
      const radius = Math.sqrt(i) * spiralRadius;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle) * phi;
      const z = radius * Math.sin(angle) * Math.cos(Math.PI / 4);
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(x, y, z);
      particles.push(particle);
      scene.add(particle);
    }

    // Animate particles along the spiral path
    particles.forEach((particle, index) => {
      const path = new THREE.CatmullRomCurve3(
        particles.slice(Math.max(0, index - 10), index + 1).map(p => p.position)
      );
      new TWEEN.Tween(particle.position)
        .to(path.getPointAt(1), 2000)
        .delay(index * 10)
        .onComplete(() => {
          // restart the animation when it's finished
          particle.position.copy(path.getPointAt(0));
          this.start();
        })
        .start();
    });

    console.log(particles);

    

    // Add lights to the scene
    {/*
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(ambientLight, pointLight);
    */}

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
      renderer.render(scene, camera);
    };
    animate();

    // Clean up the scene when the component unmounts
    return () => {
      particles.forEach(particle => {
        scene.remove(particle);
        particle.geometry.dispose();
        particle.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ParticleSpiral;
