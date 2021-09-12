import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
// import { PerspectiveCamera } from 'three';
import Building from './Building';

const BaseScene = () => {
  const camera = useThree((state) => state.camera);
  //   const set = useThree((state) => state.set);
  useEffect(() => {
    //   camera.fov = 100;
    // set({ camera: new PerspectiveCamera(140, window.height / window.width, 0.1, 1000) });
  }, []);
  useEffect(() => {
  }, [camera]);
  return (
    <>
      <boxHelper color={0xff0000}>
        <OrbitControls />
        <axesHelper args={[20]} />
        <Building />
      </boxHelper>

    </>
  );
};

export default BaseScene;
