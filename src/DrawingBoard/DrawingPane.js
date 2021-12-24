import { Plane } from '@react-three/drei';
import { number, func, instanceOf } from 'prop-types';

const DrawingPane = ({
  height, width, onMouseMove, onClick,
}) => (
  <>
    <Plane
      args={[height, width]}
      onPointerMove={onMouseMove}
      onClick={onClick}
      color="black"
      style={{ cursor: 'crosshair' }}
    >
      <meshBasicMaterial color="black" />
    </Plane>
  </>
);

DrawingPane.propTypes = {
  height: instanceOf(number).isRequired,
  width: instanceOf(number).isRequired,
  onMouseMove: func.isRequired,
  onClick: func.isRequired,
};

export default DrawingPane;
