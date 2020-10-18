const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const getSymbols = (str) => {
        const result = [];
        for (let i = 0; i < str.length; i += 10) {
            result.push(str.slice(i, i + 10));
        }
        return result;
    }
    const symbols = getSymbols(expr);
    const morseSymbols = symbols.map((s) => {
        if (s === '**********') {
            return s;
        }
        let result = '';
        for(let i = 0; i < s.length; i += 2) {
            const m = s.slice(i, i + 2);
            if (m === '10') {
                result = `${result}.`;
            } else if (m === '11') {
                result = `${result}-`;
            }
        }
        return result;
    })
    return morseSymbols.reduce((acc, m) => {
        if (m === '**********') {
            return [...acc, ' '];
        }
        return [...acc, MORSE_TABLE[m]]
    },[]).join('');
}

module.exports = {
    decode
}