import { Vector3 } from 'three';

export const initialState = {
  points: [],
  endPoint: new Vector3(0, 0, 0),
  pointerText: 'Click To Start',
};

export const actions = {
  undo: 'undo',
  addPoint: 'addPoint',
  toNextPoint: 'toNextPoint',
  reset: 'reset',
};

const getPointerText = (lastPoint, currentPoint) => {
  if (!lastPoint) {
    return 'Click To Start';
  }
  const x = Math.round(lastPoint.x - currentPoint.x, 1);
  const y = Math.round(lastPoint.y - currentPoint.y, 1);
  return `x:${x}, y:${y}`;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.toNextPoint: {
      const currentPoint = action.payload;
      const endPoint = new Vector3(currentPoint.x, currentPoint.y, 0);
      const lastPoint = state.points.at(-1);
      const pointerText = getPointerText(lastPoint, currentPoint);
      return { ...state, endPoint, pointerText };
    }
    case actions.addPoint: {
      const newPoint = action.payload;
      const newPointVector = new Vector3(newPoint.x, newPoint.y, 0);
      return {
        ...state,
        points: [...state.points, newPointVector],
        pointerText: '0,0',
      };
    }
    case actions.reset: {
      return initialState;
    }
    default:
      throw new Error();
  }
};
