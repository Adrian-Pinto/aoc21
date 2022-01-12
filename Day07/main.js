import { readFileSync } from 'fs';
import { stdout, argv } from 'process';
import { calculateFuelCost, calculateMedia } from './src/calcUtils.js';

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

const media = calculateMedia(crabPositions);

const totalFuelCost = calculateFuelCost(positionFrequency, media);

stdout.write('\x1Bc');
stdout.write(`Least cuantity of fuel required: ${totalFuelCost}\n`);
