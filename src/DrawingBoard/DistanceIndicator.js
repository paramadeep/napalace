import { Html } from '@react-three/drei';
import { instanceOf, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Vector3 } from 'three';

const DistanceIndicator = ({ position, text }) => {
  const [offsetPos, setOffsetPos] = useState();
  useEffect(() => {
    const newOffsetPoint = new Vector3(5 + position.x, 2 + position.y, position.z);
    setOffsetPos(newOffsetPoint);
  }, [position]);
  return (
    <>
      <Html position={offsetPos}>
        <div style={{ color: 'white' }}>{ text }</div>
      </Html>
    </>
  );
};

DistanceIndicator.propTypes = {
  position: instanceOf(Vector3).isRequired,
  text: string.isRequired,
};

export default DistanceIndicator;
