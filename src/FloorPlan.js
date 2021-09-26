export default [
  {
    floorCorners: [
      [0, 0],
      [10, 0],
      [10, 5],
      [5, 5],
      [5, 10],
      [0, 10],
    ],
    floorThickness: 2,
    // allCornersHaveWall: true,
    floorWallHeight: 10,
    wallThickness: 1,
    walls: [
      {
        direction: 'side',
        x: 0,
        length: 10,
      },
      {
        direction: 'front',
        z: 0,
        x: 10,
        length: 10,
      },
      {
        direction: 'side',
        z: 10,
        x: 10,
        length: 10,
      },
      {
        direction: 'front',
        z: 0,
        x: 0,
        length: 10,
      },
    ],
  },
];
