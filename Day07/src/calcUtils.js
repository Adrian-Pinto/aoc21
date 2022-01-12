const calculateFuelCost = (dataSample, destiny) => Object.entries(dataSample).reduce(
  (fuelAmount, [position, frequency]) => (
    fuelAmount + Array(Math.abs(position - destiny) + 1).fill(0)
      .reduce((fuelCost, v, i) => fuelCost + i, 0) * frequency),
  0,
);

const calculateMedian = (data) => (Number.isSafeInteger(data.length)
  ? +data[data.length / 2]
  : (+data[data.length / 2 - 1] + +data[data.length / 2]) / 2);

const calculateMedia = (data) => Math
  .floor(data.reduce((acc, val) => acc + +val, 0) / data.length);

export {
  calculateFuelCost,
  calculateMedian,
  calculateMedia,
};
