function isPalindrome(word) {
    if (!word || typeof word !== 'string') {
        return false; // Previne strings vazias, nulas ou de tipos diferentes de string
    }

    const formattedWord = word
        .toLowerCase()                // Transforma em minúsculas
        .normalize('NFD')             // Normaliza caracteres acentuados
        .replace(/[\u0300-\u036f]/g, '') // Remove marcas diacríticas (acentos)
        .replace(/[^a-z0-9]/g, '');   // Remove espaços, pontuação e caracteres especiais

    return formattedWord === formattedWord.split('').reverse().join('');
}

module.exports = { isPalindrome };