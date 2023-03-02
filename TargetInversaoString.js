let str = " ossergorP e medrO"; //  exemplo

let novaStr = ""; // variável para armazenar a string invertida

for (let i = str.length - 1; i >= 0; i--) {
  novaStr += str[i]; // adiciona o caractere atual no início da nova string
}

console.log(novaStr); // exibe a nova string invertida no console