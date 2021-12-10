import 'dotenv/config';
import { stdout } from 'process';
import fetchCommands from './src/fetchData.js';

const commands = await fetchCommands(process.env.SECRET);

const commandProcessor = {
  forward: (data, x) => {
    const temp = { ...data };
    temp.horPos += parseInt(x, 10);
    temp.depPos += temp.aim * parseInt(x, 10);
    return temp;
  },
  up: (data, x) => {
    const temp = { ...data };
    temp.aim -= parseInt(x, 10);
    return temp;
  },
  down: (data, x) => {
    const temp = { ...data };
    temp.aim += parseInt(x, 10);
    return temp;
  },
};

const { horPos, depPos } = commands.reduce(
  (data, command) => (commandProcessor[command[0]]
    ? commandProcessor[command[0]](data, command[1])
    : data),
  {
    horPos: 0,
    depPos: 0,
    aim: 0,
  },
);

stdout.write(`
  Horizontal position: ${horPos}
  Depth position: ${depPos}
  Final multiply: ${horPos * depPos}
`);
