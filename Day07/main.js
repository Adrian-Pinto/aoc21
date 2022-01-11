import { readFileSync } from 'fs';
import { stdout, argv } from 'process';
import { calculateFuelCost, calculateMedian } from './src/calcUtils.js';

const [, , rawSample] = argv;

const crabPositions = readFileSync(rawSample)
  .toString()
  .trim()
  .split(',')
  .sort((a, b) => a - b);

const positionFrequency = crabPositions
  .reduce((commonness, position) => {
    const commonnessCopy = { ...commonness };
    commonnessCopy[position] = commonnessCopy[position] ? commonnessCopy[position] + 1 : 1;
    return commonnessCopy;
  }, {});

const median = calculateMedian(crabPositions);

const totalFuelCost = calculateFuelCost(positionFrequency, median);

stdout.write('\x1Bc');
stdout.write(`Least cuantity of fuel required: ${totalFuelCost}\n`);
