import {
  useReducer,
} from 'react';
import Lines from './Lines';
import DistanceIndicator from './DistanceIndicator';
import DrawingPane from './DrawingPane';
import FloorPoints from '../Control';
import { actions, initialState, reducer } from './reducer';

const DrawingBoard = () => {
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
      <FloorPoints />
      <DrawingPane
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      />
      <Lines points={[...points, endPoint]} />
      <DistanceIndicator position={endPoint} text={pointerText} />
    </>

  );
};

export default DrawingBoard;
