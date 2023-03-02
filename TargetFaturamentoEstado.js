let faturamentoPorEstado = {SP: 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, Outros: 19849.53 };
  
  // Calcula o valor total mensal da distribuidora
  let valorTotal = 0;
  for (let estado in faturamentoPorEstado) {
    valorTotal += faturamentoPorEstado[estado];
  }
  
  // Calcula o percentual  de cada estado e exibe o resultado
  for (let estado in faturamentoPorEstado) {
    let percentual = (faturamentoPorEstado[estado] / valorTotal) * 100;
    console.log(estado + ' - ' + percentual.toFixed(2) + '%');
  }