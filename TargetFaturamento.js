// Array que guarda o valor de faturamento diário o [0] corresponde ao primeiro dia de faturamento 
const faturamentoDiario = [22174.1664,24537.6698,26139.6134,0.0,0.0,26742.6612,0.0,42889.2258,46251.174,11191.4722,0.0,0.0,3847.4823,373.7838,2659.7563,48924.2448,18419.2614,0.0,0.0,35240.1826,43829.1667,18235.6852,4355.0662,13327.1025,0.0,0.0,25681.8318,1718.1221,13220.495,8414.61];

// variáveis para armazenar os valores de monor, maior e soma do faturamento diário
let menorFaturamento = faturamentoDiario[0];
let maiorFaturamento = faturamentoDiario[0];
let somaFaturamento = 0;

// loop para percorrer o array e atualizar as variáveis
for (let i = 0; i < faturamentoDiario.length; i++) {
  // atualiza o menor valor de faturamento
  if (faturamentoDiario[i] < menorFaturamento) {
    menorFaturamento = faturamentoDiario[i];
  }

  // atualiza o maior valor de faturamento
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
  }

  // soma o valor do faturamento diário desconsiderando os dias sem faturamento 
  if (faturamentoDiario[i] > 0) {
    somaFaturamento += faturamentoDiario[i];
  }
}

// calcula a média mensal de faturamento diário
const mediaFaturamento = somaFaturamento / faturamentoDiario.filter(valor => valor > 0).length;

// variável para armazenar o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
let diasAcimaDaMedia = 0;

// loop para percorrer o vetor e contar o número de dias em que o faturamento diário foi superior à média mensal
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
}

// exibe os resultados
console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);