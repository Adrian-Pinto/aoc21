// importar input
// .toString
// .split(\n)

// estados { media: inputLength / 2 }

// gamma = input.reduce( (gamma, input) => 
// input.split('').map((input, i) => parseInt(input) + gamma[i] )
//,[] )
// .map((value) => value > media ? 1 : 0 )
// .joint('')

// epsilon = gamma.split('').map((value) => parseInt(value, 2) ? 0 : 1  ).join('')

// ! si sumo todos los bits positivos y son mayor a la mitad de filas el promedio sera positivo si no es negativo

// stdout >> ("0b"+gamma) * ("0b"+epsilon)
