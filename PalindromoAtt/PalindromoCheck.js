const { isPalindrome } = require('./Palindromo'); 
const readline = require('readline'); 

// Configuração para leitura de entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma palavra ou frase para verificar se é um palíndromo: ', (input) => {
    if (isPalindrome(input)) {
        console.log('✅ É um palíndromo!');
    } else {
        console.log('❌ Não é um palíndromo.');
    }
    rl.close(); 
});