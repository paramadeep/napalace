import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const SideWall = ({
  length, height, thickeness, color,
}) => (
  <Box
    xSize={thickeness}
    ySize={height}
    zSize={length}
    color={color}
  />
);

SideWall.propTypes = {
  height: PropTypes.number,
  length: PropTypes.number,
  thickeness: PropTypes.number,
  color: PropTypes.string,
};

SideWall.defaultProps = {
  height: 10,
  length: 10,
  thickeness: 1,
  color: 'yellow',
};

export default SideWall;
