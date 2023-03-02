
const numeroVerificado = 14; // Variavel que define o número a ser verificado

// Variáveis que armazenam os dois primeiros números da sequência
let num1 = 0;
let num2 = 1;

// Loop para gerar a sequência de Fibonacci até o número verificado ou até o limite 
for (let i = 2; i <= 100; i++) {
  const proximoNum = num1 + num2;

  // Verifica se o número verificado é igual ao próximo número na sequência
  if (proximoNum === numeroVerificado) {
    console.log(numeroVerificado + ' pertence à sequência de Fibonacci');
    break;
  }

  // Verifica se o próximo número na sequência é maior que o número verificado
  if (proximoNum > numeroVerificado) {
    console.log(numeroVerificado + ' não pertence à sequência de Fibonacci');
    break;
  }

  // Atualiza os números para a próxima iteração
  num1 = num2;
  num2 = proximoNum;
}