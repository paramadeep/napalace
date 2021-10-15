import { Vector3 } from 'three';
import { Plane } from '@react-three/drei';
import {
  useMemo, useState,
} from 'react';
import Lines from './Lines';

const DrawingBoard = () => {
  const initialPoint = useMemo(() => new Vector3(0, 0, 0));
  const [points, setPoints] = useState([initialPoint]);
  const [endPoint, setEndPoint] = useState(initialPoint);
  const handleMouseMove = ({ point }) => {
    const mousePoint = new Vector3(point.x, point.y, 0);
    setEndPoint(mousePoint);
  };
  const handleClick = ({ point }) => {
    const mousePoint = new Vector3(point.x, point.y, 0);
    setPoints((prevPoints) => [...prevPoints, mousePoint]);
  };
  return (
    <>
      <Plane
        args={[70, 70]}
        onPointerMove={handleMouseMove}
        onClick={handleClick}
        color="black"
      >
        <meshBasicMaterial color="black" />
      </Plane>
      <Lines points={[...points, endPoint]} />
    </>

  );
};

export default DrawingBoard;
