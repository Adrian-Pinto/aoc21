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
      newCoors.push([a[0], i].join(','));
    }
  }
  if (!axis) {
    for (let i = a[0]; i <= b[0]; i++) {
      newCoors.push([i, a[1]].join(','));
    }
  }
  return newCoors;
};

export default (coorSet) => {
  const or = [];
  coorSet.forEach(([pointA, pointB]) => {
    if (pointA[1] === pointB[1] && pointA[0] !== pointB[0]) {
      or.push(genLineCoors(sortCoor([pointA, pointB], 0), 0));
    }
    if (pointA[0] === pointB[0] && pointA[1] !== pointB[1]) {
      or.push(genLineCoors(sortCoor([pointA, pointB], 1), 1));
    }
  });
  return or;
};
