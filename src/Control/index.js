import { useControls } from 'leva';
import { Html } from '@react-three/drei';

const FloorPoints = () => {
  useControls({
    foo: [
      1,
      10,
      0,
    ],
    bar: [
      1,
      10,
      0,
    ],
    c: 20,
  });
  return (
    <Html />
  );
};
export default FloorPoints;
