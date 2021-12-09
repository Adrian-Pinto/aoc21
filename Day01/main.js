const { readFileSync } = require('fs');

const input = readFileSync(process.argv[2]).toString().split('\n');

const result = input.reduceRight((amount, mesure, i) => (
  i && amount + Number.parseInt(mesure / input[i - 1], 10)) || amount, 0);

console.clear();
console.log(`La cantidad de medidas que incrementan es: ${result}`);
