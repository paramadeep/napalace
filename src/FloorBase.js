/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Vector2, Shape } from 'three';

const buildShape = (corners) => {
  const start = new Vector2(0, 0);
  const points = [start];
  corners.forEach((corner, index) => {
    const previousCorner = points[index];
    const x = previousCorner[0] + corner.x;
    const y = previousCorner[0] + corner.z;
    points.push([x, y]);
  });
  points.push(start);
  console.log('******************');
  console.log(points);
  return new Shape([points]);
};

const FloorBase = ({ corners }) => {
  const [floorShape, setFloorShape] = useState(buildShape(corners));
  const [extrusionSetting] = useState({ depth: 10 });
  useEffect(() => {
    console.log('******************');
    setFloorShape(buildShape(corners));
  }, [corners]);
  return (
    <mesh>
      <extrudeGeometry args={[floorShape, extrusionSetting]} />
      <meshBasicMaterial />
    </mesh>
  );
};

FloorBase.propTypes = {
  corners: PropTypes
    .arrayOf(PropTypes.shape({
      x: PropTypes.number,
      z: PropTypes.number,
    })).isRequired,
};

export default FloorBase;
