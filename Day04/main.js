import './src/chunkMethod.js';
import { readFileSync } from 'fs';
import { stdout } from 'process';

const arrayColumn = (arr, n) => arr.map((x) => x[n]);

const input = readFileSync(process.argv[2]).toString().replaceAll('\n\n', '\n').split('\n');

const randomNum = input.shift(1).split(',');

const bingoCards = input.map((row) => row.trim().replaceAll('  ', ' ').split(' ')).chunk(5)
  .map((card) => {
    const newCard = [...card];
    card.forEach((row, i) => {
      newCard.push(arrayColumn(card, i));
    });
    return newCard;
  });

// forEach random num
//  const actualRandomNum = randomNum
//  find n on all cards
//    convert match string to num
//    ?
//    ? bingoCards[0][0][1] = Number.parseInt(bingoCards[0][0][1], 10);
//    see if all i of a row are a typeof Num
//      if true sum all i of a rom and * with actual random num
//      return the result

console.log(randomNum);
console.log('---');
console.log(bingoCards[0]);

// stdout.write('\x1Bc');
// stdout.write(input);
