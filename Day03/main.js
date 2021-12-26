import { readFileSync } from 'fs';
import { stdout } from 'process';

const input = readFileSync(process.argv[2]).toString().split('\n');

const commonBit = (data, x = 1) => {
  const media = data.length / 2;
  return data.reduce(
    (acc, value) => (value ? value.split('')
      .map((digit, i) => (acc[i] === undefined ? digit : +acc[i] + +digit)) : acc),
  ).map((value) => {
    if (!x) return value < media ? 1 : value === media ? x : 0;
    return value > media ? 1 : value === media ? x : 0;
  }).join('');
};

const calculateRating = (data, x, bit = 0) => {
  const media = commonBit(data, x);
  const result = data.filter((value) => (value[bit] === media[bit]));
  if (result.length === 1) return result;
  return calculateRating(result, x, bit + 1);
};

const gamma = commonBit(input);
const epsilon = gamma.split('').map((value) => (+value ? 0 : 1)).join('');
const [oxygen] = calculateRating(input, 1);
const [coTwo] = calculateRating(input, 0);

stdout.write('\x1Bc');
stdout.write(`Power consumption: ${`0b${gamma}` * `0b${epsilon}`}\n`);
stdout.write(`Life support rating: ${`0b${oxygen}` * `0b${coTwo}`}\n`);
