import { readFileSync } from 'fs';
import { stdout } from 'process';
// format input 1xx,1yy -> 2xx,2yy to [[[1xx, 1yy],[2xx, 2yy]], [[...],[...]], ...]
// ? ordenar las diagonales de abajo arriba y asi separarlas solo en la direccion en la que crecen
const arrTest = [[[5, 9], [0, 9]], [[9, 4], [3, 4]], [[7, 4], [7, 0]]];

/**
 * @param {Array} set x,y coordinate
 * @param {Number} axis 0 for x || 1 for y
 * @returns {Array}
 */
const sortCoor = (set, axis) => set.sort((x, y) => x[axis] - y[axis]);

const genLineCoors = ([a, b], axis) => {
  const newCoors = [];
  if (axis) {
    for (let i = a[1]; i <= b[1]; i++) {
      newCoors.push([a[0], i]);
    }
  }
  if (!axis) {
    for (let i = a[0]; i <= b[0]; i++) {
      newCoors.push([i, a[1]]);
    }
  }
  return newCoors;
};

const makeLine = (coorSet) => {
  const result = coorSet.map((set) => {
    let or;
    if (set[0][0] !== set[1][0]) {
      or = genLineCoors(sortCoor(set, 0), 0);
    }
    if (set[0][1] !== set[1][1]) {
      or = genLineCoors(sortCoor(set, 1), 1);
    }
    return or;
  });
  return result;
};

stdout(Array.join(makeLine(arrTest)));
/*

 */
/*
  input.filter((coor) =>
    1xx === 2xx -> ordenar (a > b) de y || 1yy === 2yy -> ordenar (a > b) de x
  )
*/
/*
    input.map((coor) => {
      if 1xx === 2xx -> return new cor forEach y dif
    })
*/
// store in new arr [['xxxyyy',intensity], [...], [...], ...]
