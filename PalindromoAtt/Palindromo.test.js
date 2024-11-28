const { isPalindrome } = require('./Palindromo');

test('Verifica palavras e frases palíndromas corretamente', () => {
    expect(isPalindrome('Radar')).toBe(true);       // Deve retornar true
    expect(isPalindrome('Luz azul')).toBe(true);    // Deve retornar true
    expect(isPalindrome('Ana')).toBe(true);         // Deve retornar true
    expect(isPalindrome('Mundo')).toBe(false);      // Deve retornar false
    expect(isPalindrome('JavaScript')).toBe(false); // Deve retornar false
    expect(isPalindrome('')).toBe(false);           // Deve retornar false
    expect(isPalindrome(null)).toBe(false);         // Deve retornar false
    expect(isPalindrome(undefined)).toBe(false);    // Deve retornar false
    expect(isPalindrome('A sacada da casa.')).toBe(true); // Deve retornar true
    expect(isPalindrome('A cara rajada da jararaca')).toBe(true); // Deve retornar true
    expect(isPalindrome('Após a sopa.')).toBe(true); // Deve retornar true
    expect(isPalindrome('A torre da derrota')).toBe(true); // Deve retornar true
    expect(isPalindrome('Socorram-me Subi no onibus em Marrocos')).toBe(true); // Deve retornar true
    expect(isPalindrome('Lá tem metal.')).toBe(true); // Deve retornar true
    expect(isPalindrome('Ame o poema')).toBe(true); // Deve retornar true
});