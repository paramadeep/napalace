import PropTypes from 'prop-types';

const Box = ({
  xSize, ySize, zSize, color,
}) => (
  <mesh>
    <boxGeometry args={[xSize, ySize, zSize]} />
    <meshBasicMaterial color={color} />
  </mesh>
);

Box.propTypes = {
  xSize: PropTypes.number.isRequired,
  ySize: PropTypes.number.isRequired,
  zSize: PropTypes.number.isRequired,
  color: PropTypes.string,
};

Box.defaultProps = {
  color: 'green',
};

export default Box;
