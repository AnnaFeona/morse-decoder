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
    let arr = [];// write your solution here
    let decoder = [];
    tmp = '';
    let result = '';
    const _LEN = expr.length;
    let count = 0;
    for (let i = 0; i < _LEN; i+=10){
        for (let j = 0; j < 10; j++){
            tmp += expr[i+j];
        }
        arr.push(+tmp);
        tmp = '';
        count++;
    }


    for (i = 0; i < count; i++){
        decoder.push('');
        if (arr[i]) {
            let str = arr[i].toString();
            for (j = 0; j < str.length; j+=2){
                if (str[j] + str[j+1] === '10'){
                    tmp = '.';
                } else {
                    tmp = '-';
                }
                decoder[i]+=tmp;
                tmp = '';
            }
        } else {
            decoder[i] = ' ';
        }
    }

    for (i = 0; i < count; i++){
        result = (decoder[i] != ' ') ? result + MORSE_TABLE[decoder[i]] : result + decoder[i];
    }
    return result;
}

module.exports = {
    decode
}