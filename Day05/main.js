import './src/chunkMethod.js';
import { readFileSync } from 'fs';
import { stdout } from 'process';
import genLineCoors from './src/lineUtils.js';

const input = genLineCoors(
  readFileSync(process.argv[2])
    .toString()
    .replaceAll(' -> ', '\n').replaceAll(',', '\n')
    .split('\n')
    .map((string) => +string)
    .chunk(2)
    .chunk(2)
    .slice(0, -1),
).flat();

const paintPoints = (pointSets) => {
  const matrix = {};
  pointSets.forEach((set) => {
    matrix[set] = matrix[set] ? matrix[set] += 1 : matrix[set] = 1;
  });
  return Object.entries(matrix);
};

const matrix = paintPoints(input);

const overlapCount = matrix.reduce((acc, [, overlap]) => (overlap >= 2 ? acc + 1 : acc), 0);

stdout.write('\x1Bc');
stdout.write(`Total lines overlap: ${overlapCount}\n`);
