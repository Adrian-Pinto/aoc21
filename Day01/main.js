import { readFileSync } from 'fs';
import { stdout as output } from 'process';

const result = readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .map((mesure, i, mesures) => (
    i < mesures.length - 2 && +mesure + +mesures[i + 1] + +mesures[i + 2]) || 0)
  .reduceRight((amount, mesure, i, mesures) => (
    i && mesure !== mesures[i - 1] && amount + Number.parseInt(mesure / mesures[i - 1], 10)) || amount, 0);
    
output.write('\x1Bc');
output.write(`Number of times mesures increases is: ${result}\n`);
