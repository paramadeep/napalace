import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import BaseScene from './BaseScene';
import './styles.css';

const App = () => (
  <Canvas resize={{ scroll: true }}>
    <OrbitControls />
    <BaseScene />
  </Canvas>
);

export default App;
