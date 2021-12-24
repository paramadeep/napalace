import {
  useReducer, useState,
} from 'react';
import { Vector3 } from 'three';
import Lines from './Lines';
import DistanceIndicator from './DistanceIndicator';
import DrawingPane from './DrawingPane';
import FloorPoints from '../Control';
import { actions, initialState, reducer } from './reducer';
import CrossLine from './CrossLine/index';

const DrawingBoard = () => {
  const [{ height, width }] = useState({ height: 100, width: 100 });
  const [state, dispatch] = useReducer(reducer, initialState);
  const { points, endPoint, pointerText } = state;
  const handleMouseMove = ({ point }) => {
    dispatch({ type: actions.toNextPoint, payload: point });
  };
  const handleClick = ({ point }) => {
    dispatch({ type: actions.addPoint, payload: point });
  };
  return (
    <>
      <FloorPoints points={points} />
      <DrawingPane
        height={height}
        width={width}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />
      <CrossLine
        height={height}
        width={width}
        paneSize={[new Vector3(100, 100, 1)]}
        centerPoint={endPoint}
      />
      <Lines points={[...points, endPoint]} />
      <DistanceIndicator position={endPoint} text={pointerText} />
    </>

  );
};

export default DrawingBoard;
