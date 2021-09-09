import {
  mesh, boxGeometry, meshBasicMaterial,
} from '@react-three/fiber';
import React, { useEffect } from 'react';
// import { Color } from 'three';

const BaseScene = () => {
  // const state = useThree();
  useEffect(() => {
    // state.scene.background = new Color('black');
  },
  []);
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial />
    </mesh>
  );
};

export default BaseScene;
