import { Line } from '@react-three/drei';
import { Vector3 } from 'three';
import PropTypes, { instanceOf } from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

const Lines = ({ points }) => {
  const getVertices = useMemo(() => {
    const allEdges = [];
    for (let index = 0; index < points.length - 1; index += 1) {
      const point = points[index];
      const edges = [point, points[index + 1]];
      const id = index + 1;
      allEdges.push({ edges, id });
    }
    return allEdges;
  }, [points]);
  const [lineallEdgs, setLineEdges] = useState(getVertices);
  useEffect(() => {
    setLineEdges(getVertices);
  }, [points]);
  return (
    <>
      {lineallEdgs.map((linePoint) => <Line points={linePoint.edges} color="red" key={linePoint.id} />)}
    </>
  );
};

Lines.propTypes = {
  points: PropTypes.arrayOf(instanceOf(Vector3)).isRequired,
};

export default Lines;
