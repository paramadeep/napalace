import { useControls } from 'leva';
import { Html } from '@react-three/drei';
import PropTypes, { instanceOf } from 'prop-types';
import { Vector3 } from 'three';
import { useEffect, useState } from 'react';

const FloorPoints = ({ points }) => {
  const [corners, setCorners] = useState();
  useEffect(() => {
    const baseCorners = {};
    points.forEach((point, index) => {
      console.log(index);
      baseCorners[`Corner${index}`] = [point.x, point.y];
    });
    setCorners({ a: [1, 2] });
    console.log(corners);
    console.log(baseCorners);
  }, [points]);
  useControls({ a: [1, 2] });
  return (
    <Html />
  );
};

FloorPoints.propTypes = {
  points: PropTypes.arrayOf(instanceOf(Vector3)).isRequired,
};
export default FloorPoints;
