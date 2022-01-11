const calculateFuelCost = (dataSample, destiny) => Object.entries(dataSample)
  .reduce((fuelAmount, [position, frequency]) => (
    fuelAmount + Math.abs(position - destiny) * frequency
  ), 0);

const calculateMedian = (data) => (Number.isSafeInteger(data.length)
  ? +data[data.length / 2]
  : (+data[data.length / 2 - 1] + +data[data.length / 2]) / 2);

export {
  calculateFuelCost,
  calculateMedian,
};
