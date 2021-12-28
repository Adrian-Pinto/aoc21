import './src/chunkMethod.js';
import { readFileSync } from 'fs';
import { stdout } from 'process';

const input = readFileSync(process.argv[2]).toString().replaceAll('\n\n', '\n').split('\n');

const randomNum = input.shift(1).split(',');
const bingoCards = input.map((value) => value.trim().replaceAll('  ', ' ').split(' ')).chunk(5);
// value.replaceAll('  ', ' ')

console.log(randomNum);
console.log('---');
console.log(bingoCards);

// stdout.write('\x1Bc');
// stdout.write(input);
