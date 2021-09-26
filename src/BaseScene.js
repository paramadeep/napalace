import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Building from './Building';

const BaseScene = () => {
  const camera = useThree((state) => state.camera);
  //   const set = useThree((state) => state.set);
  useEffect(() => {
    //   camera.fov = 100;
    // set({ camera: new PerspectiveCamera(140, window.height / window.width, 0.1, 1000) });
  }, []);
  useEffect(() => {
    camera.position.z = 50;
    console.log(camera.position);
  });
  return (
    <>
      <OrbitControls />
      <axesHelper args={[20]} />
      <Building />

    </>
  );
};

export default BaseScene;
