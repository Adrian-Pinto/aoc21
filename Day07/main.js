import { readFileSync } from 'fs';
import { stdout, argv } from 'process';

const [, , rawSample] = argv;

const crabPositions = readFileSync(rawSample).toString().trim().split(',');

const positionFrequency = crabPositions
  .reduce((commonness, position) => {
    const commonnessCopy = { ...commonness };
    commonnessCopy[position] = commonnessCopy[position] ? commonnessCopy[position] + 1 : 1;
    return commonnessCopy;
  }, {});

const mode = (data) => Number.parseInt(
  Object
    .entries(data)
    .sort((a, b) => a[1] - b[1])
    .pop().shift(),
  10,
);

console.log(`Mode: ${mode(positionFrequency)}`);
console.log(positionFrequency);

// input = hoz pos of each crab submarine
// calculate the 'moda' on input values
// forEach crap
//  usedFuel = Math.abs(crapPos - 'moda')
