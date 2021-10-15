import { Plane } from '@react-three/drei';
import { func } from 'prop-types';

const DrawingPane = ({ onMouseMove, onClick }) => (
  <>
    <Plane
      args={[70, 70]}
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
  onMouseMove: func.isRequired,
  onClick: func.isRequired,
};

export default DrawingPane;
