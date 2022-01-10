import { readFileSync } from 'fs';
import { stdout, argv } from 'process';

const [, , rawInput] = argv;

const input = readFileSync(rawInput).toString();

console.log(input);

// enter cuantity of days
//  make a loop for count to 0
//  each loop makes counters =- 1
//  each 0 add new counter starting by 8 and reset de actual counter to 6

// ? - separate fish by days x cuantity left instead of cuantity x days
