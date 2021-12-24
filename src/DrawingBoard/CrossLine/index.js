import { Line } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Vector3 } from 'three';
import PropTypes, { instanceOf, number } from 'prop-types';

const CrossLine = ({
  height, width, paneSize, centerPoint,
}) => {
  const [hLineEdges, setHLineEdges] = useState([new Vector3(-50, 0, 0), new Vector3(50, 0, 0)]);
  const [vLineEdges, setVLineEdges] = useState([new Vector3(0, -50, 0), new Vector3(0, 50, 0)]);

  useEffect(() => {
    setHLineEdges([new Vector3(-50, centerPoint.y, 0), new Vector3(50, centerPoint.y, 0)]);
    setVLineEdges([new Vector3(centerPoint.x, -50, 0), new Vector3(centerPoint.x, 50, 0)]);
  }, [height, width, paneSize, centerPoint]);

  return (
    <>
      <Line
        points={hLineEdges}
        color="grey"
      />
      <Line
        points={vLineEdges}
        color="grey"
      />
    </>
  );
};

CrossLine.propTypes = {
  height: instanceOf(number).isRequired,
  width: instanceOf(number).isRequired,
  paneSize: PropTypes.arrayOf(instanceOf(Vector3)).isRequired,
  centerPoint: instanceOf(Vector3).isRequired,
};

export default CrossLine;
