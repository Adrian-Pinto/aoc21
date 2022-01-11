const calculateFuelCost = (dataSample, destiny) => Object.entries(dataSample)
  .reduce((fuelAmount, [position, frequency]) => (
    fuelAmount + Math.abs(position - destiny) * frequency
  ), 0);

// ! need to calculate median
// median = 331
const calculateMode = (data) => Number.parseInt(
  Object
    .entries(data)
    .sort((a, b) => a[1] - b[1])
    .pop().shift(),
  10,
);

export {
  calculateFuelCost,
  calculateMode,
};
