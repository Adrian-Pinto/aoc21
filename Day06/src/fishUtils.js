import { stdout, exit } from 'process';

const rotateFish = (fish, newFish) => {
  const temporalFish = [...fish];
  const newSixDay = temporalFish.shift();
  temporalFish[6] += newSixDay;
  temporalFish.push(newFish);
  return temporalFish;
};

export default (days, sample) => {
  let sampleCopy = [...sample];
  for (let i = 0; i < days; i++) {
    sampleCopy = rotateFish(sampleCopy, sampleCopy[0]);
  }
  stdout.write('\x1Bc');
  stdout.write(`After ${days} days, there are ${sampleCopy.reduce((result, fish) => result + fish)} lanterfish.\n`);
  exit(0);
};
