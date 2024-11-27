function testFunc() {
    var name = "test"; // Problema: uso de 'var'
    console.log("Testing ESLint!"); // Problema: 'console.log' deve gerar um 'warn'
    if (name == "test") { // Problema: uso de '==' em vez de '==='
      console.log("Hello World!") // Problema: falta de ponto e vírgula
    }
  }
  
  function anotherTest () { // Problema: espaço antes do parêntese da função
    let value = 5;   
    return value;
    console.log("Unreachable code"); // Problema: código após 'return' (inatingível)
  }
  