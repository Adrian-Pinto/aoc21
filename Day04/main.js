import './src/chunkMethod.js';
import { readFileSync } from 'fs';
import { stdout } from 'process';
import arrayColumn from './src/arrayColumn.js';
import playBingo from './src/playBingo.js';

const input = readFileSync(process.argv[2]).toString().replaceAll('\n\n', '\n').split('\n');

const randomNumbers = input.shift(1).split(',');

const bingoCards = input.map((row) => row.trim().replaceAll('  ', ' ').split(' ')).chunk(5)
  .map((card) => {
    const newCard = [...card];
    card.forEach((row, i) => {
      newCard.push(arrayColumn(card, i));
    });
    return newCard;
  });

const score = playBingo(randomNumbers, bingoCards);

stdout.write('\x1Bc');
stdout.write(`The final score is: ${score}\n`);
