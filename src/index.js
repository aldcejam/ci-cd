const soma = (a, b) => {
  return a + b;
}

const subtracao = (a, b) => {
  return a - b;
}

console.log(soma(1, 2)); // 3
console.log(subtracao(1, 2)); // -1

module.exports = {
  soma,
  subtracao
}