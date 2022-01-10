import { readFileSync } from 'fs';
import {
  stdin as input,
  stdout as output,
  argv,
  exit,
} from 'process';
import readline from 'readline';
import fishCicle from './src/fishUtils.js';

const [, , rawSample] = argv;

const rl = readline.createInterface({ input, output });

const fishSample = readFileSync(rawSample).toString().trim().split(',')
  .reduce((fishDays, fish) => {
    const accCopy = [...fishDays];
    accCopy[fish] = accCopy[fish] ? accCopy[fish] + 1 : 1;
    return accCopy;
  }, [0, 0, 0, 0, 0, 0, 0, 0, 0]);

const init = () => {
  output.write('\x1Bc');
  rl.question(
    'How many day cicles you want to calculate? (Push ESC to quit)\n',
    (days) => (Number.parseInt(days, 10) && fishCicle(days, fishSample)) || init(),
  );
};

input.on('keypress', (data, key) => {
  if (key.name === 'escape') {
    output.write('\x1Bc');
    exit(0);
  }
});

init();
