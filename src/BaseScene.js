import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { Vector3 } from 'three';
import DrawingBoard from './DrawingBoard';

const BaseScene = () => {
  const camera = useThree((state) => state.camera);
  //   const set = useThree((state) => state.set);
  useEffect(() => {
    //   camera.fov = 100;
    // set({ camera: new PerspectiveCamera(140, window.height / window.width, 0.1, 1000) });
  }, []);

  const points1 = [];
  points1.push(new Vector3(0, 0, 0));
  points1.push(new Vector3(10, 20, 0));

  useEffect(() => {
    camera.position.z = 100;
  }, [camera.position]);
  return (
    <>
      <DrawingBoard />
      <axesHelper args={[40]} />
    </>
  );
};

export default BaseScene;
