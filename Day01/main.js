const { readFileSync } = require('fs');
const { stdout: output } = require('process');

const mesures = readFileSync(process.argv[2]).toString().split('\n');

const result = mesures.reduceRight((amount, mesure, i) => (
  i && amount + Number.parseInt(mesure / mesures[i - 1], 10)) || amount, 0);

output.write('\x1Bc');
output.write(`Number of times mesures increases is: ${result}\n`);
