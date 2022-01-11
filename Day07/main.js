import { readFileSync } from 'fs';
import { stdout, argv } from 'process';
import { calculateFuelCost, calculateMode } from './src/calcUtils.js';

const [, , rawSample] = argv;

const crabPositions = readFileSync(rawSample).toString().trim().split(',');

const positionFrequency = crabPositions
  .reduce((commonness, position) => {
    const commonnessCopy = { ...commonness };
    commonnessCopy[position] = commonnessCopy[position] ? commonnessCopy[position] + 1 : 1;
    return commonnessCopy;
  }, {});

// ! - calculate median instead of mode
const mode = calculateMode(positionFrequency);

const totalFuelCost = calculateFuelCost(positionFrequency, mode);

stdout.write('\x1Bc');
stdout.write(`Least cuantity of fuel required: ${totalFuelCost}\n`);
