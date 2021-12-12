import { readFileSync } from 'fs';
import { stdout } from 'process';

const input = readFileSync(process.argv[2]).toString().split('\n');
const media = input.length / 2;
const gamma = input
  .reduce(
    (acc, value) => (value ? value.split('').map((digit, i) => (acc[i] === undefined ? digit : +acc[i] + +digit)) : acc),
  ).map((value) => (value > media ? 1 : 0))
  .join('');

const epsilon = gamma.split('').map((value) => (+value ? 0 : 1)).join('');

stdout.write('\x1Bc');
stdout.write(`Power consumption: ${`0b${gamma}` * `0b${epsilon}`}\n`);
