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
  const result = coorSet.map((set) => {
    let or;
    if (set.length === 2 && set[0][0] !== set[1][0]) {
      or = genLineCoors(sortCoor(set, 0), 0);
    }
    if (set.length === 2 && set[0][1] !== set[1][1]) {
      or = genLineCoors(sortCoor(set, 1), 1);
    }
    return or;
  });
  return result;
};
