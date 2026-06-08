const fs = require('fs');

type Shape = {
  color: string;
  sideLength: number;
};

const value: string = 'square';

function test1(length: number, positionX: number, position_y: number, color: string): object {
  const shape: object = {
    color,
    positionX,
      position_y,
  };

  return shape;
}

export {
  value,
  test1,
};
