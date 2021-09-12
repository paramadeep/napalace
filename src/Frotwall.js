import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const FrontWall = ({
  length, height, thickeness, color,
}) => (
  <Box xSize={length} ySize={height} zSize={thickeness} color={color} />
);

FrontWall.propTypes = {
  height: PropTypes.number,
  length: PropTypes.number,
  thickeness: PropTypes.number,
  color: PropTypes.string,
};

FrontWall.defaultProps = {
  height: 10,
  length: 10,
  thickeness: 1,
  color: 'red',
};

export default FrontWall;
