import { useEffect } from 'react/cjs/react.development';
import FloorBase from './FloorBase';
import FloorPlan from './FloorPlan';

const Building = () => {
  useEffect(() => {
    console.log(FloorPlan[0].floorCorners);
  });
  return (
    <>
      <FloorBase corners={FloorPlan[0].floorCorners} />
    </>
  );
};

export default Building;
