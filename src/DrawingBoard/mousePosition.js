import { Vector2 } from 'three';

const getDrawPosition = (xy) => {
  const x = xy[0];
  const y = xy[1];
  const mousePos = new Vector2();
  mousePos.x = (x / window.innerWidth) * 2 - 1;
  mousePos.y = (y / window.innerWidth) * 2 - 1;
  return mousePos;
};

export default getDrawPosition;
