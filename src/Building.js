import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import FloorBase from './FloorBase';
import FloorPlan from './FloorPlan';

const Building = () => {
  const [floorCorners] = useState(FloorPlan[0].floorCorners);
  useEffect(() => {
    // console.log(FloorPlan[0].floorCorners);
  });
  return (
    <>
      <FloorBase corners={floorCorners} />
    </>
  );
};

export default Building;
