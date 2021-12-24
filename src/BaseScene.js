import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import DrawingBoard from './DrawingBoard';

const BaseScene = () => {
  const camera = useThree((state) => state.camera);
  useEffect(() => {
    camera.position.z = 75;
  }, []);
  return (
    <>
      <DrawingBoard />
      {/* <axesHelper args={[40]} /> */}
    </>
  );
};

export default BaseScene;
