/* eslint-disable no-console */
import PropTypes, { arrayOf, number } from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Shape, Vector2 } from 'three';

const buildShape = (corners) => {
  const points = [];
  corners.forEach((corner) => {
    points.push(new Vector2(corner[0], corner[1]));
  });
  points.push(new Vector2(corners[0][0], corners[0][1]));
  return new Shape(points);
};

const FloorBase = ({ corners }) => {
  const [floorShape] = useState(buildShape(corners));
  const [extrusionSetting] = useState({
    depth: 2,
    bevelEnabled: false,
  });
  useEffect(() => {
    console.log(floorShape.getPoints());
  });
  return (
    <>
      <mesh>
        <extrudeGeometry args={[floorShape, extrusionSetting]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

FloorBase.propTypes = {
  corners: PropTypes
    .arrayOf(arrayOf(number)).isRequired,
};

export default FloorBase;
