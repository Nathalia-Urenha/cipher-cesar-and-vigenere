const lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function setResult(value) {
    document.getElementById('result').setAttribute('value', value);
    result = '';
}

function exit() {
    window.close();
}

function checkCesar(message, key) {
    if (message == "") {
        alert("Insira um texto!!!");
        return false;
    }
    if (key < 1 || key > 25) {
        alert("A chave deve ser um número entre 1 e 25!!!");
        return false;
    }
    return true;
};

function checkVigenere(message, key) {
    if (message == "") {
        alert("Insira um texto!!!");
        return false;
    }
    if (key.length < 8 || key.length > 15) {
        alert("A chave deve conter de 8 a 15 letras!!!");
        return false;
    }
    return true;
}


function uppercase(char) {
    if (char >= "A" && char <= "Z") {
        return true;
    }
    return false;
}

//function that implement de encrypt cipher cesar
function encryptCesar() {
    const message = document.getElementById('message-cesar').value;
    const key = document.getElementById('key-cesar').value;
    let result = '';
    if (checkCesar(message, key)) {
        for (let i = 0; i < message.length; i++) {
            const char = message.charAt(i);
            let index = 0;
            if (char == ' ') {
                result = `${result} `;
            } else {
                if (uppercase(char)) {
                    index = lettersUpperCase.indexOf(char);
                    if (index + Number(key) > 25) {
                        index = index - 26;
                    }
                    result = `${result}${lettersUpperCase[index + Number(key)]}`;
                } else {
                    index = lettersLowercase.indexOf(char);
                    if (index + Number(key) > 25) {
                        index = index - 26;
                    }
                    result = `${result}${lettersLowercase[index + Number(key)]}`;
                }
            }
        }
        setResult(result)
    }
}

//function that implement de decrypt cipher cesar
function decryptCesar() {

    const message = document.getElementById('result').value !== ''
        ? document.getElementById('result').value
        : document.getElementById('message-cesar').value;

    const key = document.getElementById('key-cesar').value;
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let c = message.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 - key + 26) % 26 + 65);
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 - key + 26) % 26 + 97);
        } else {
            result += message.charAt(i);
        }
    }
    setResult(result);
}

//function that implement de encrypt cipher vigenere
function encryptVigenere() {
    const message = document.getElementById('message-vigenere').value;
    const key = document.getElementById('key-vigenere').value;
    let result = '';

    if (checkVigenere(message, key)) {
        for (let i = 0; i < message.length; i++) {
            const char = message.charAt(i);
            let charkey = key.charAt(i % key.length);
            let indexkey = 0;
            let indexMsg = 0;
            if (char == ' ') {
                result = `${result} `;
            } else {
                indexkey = lettersUpperCase.indexOf(charkey.toUpperCase());
                indexMsg = lettersUpperCase.indexOf(char.toUpperCase());
                indexMsg = (indexMsg + indexkey) % 26;
                if (uppercase(char)) {
                    result = `${result}${lettersUpperCase[indexMsg]}`;
                } else {
                    result = `${result}${lettersLowercase[indexMsg]}`;
                }
            }
        }
        setResult(result);
    }


}

//function that implement de decrypt cipher vigenere
function decryptVigenere() {

    const message = document.getElementById('result').value !== ''
        ? document.getElementById('result').value
        : document.getElementById('message-vigenere').value;

    const key = document.getElementById('key-vigenere').value;
    let result = '';
    if (checkVigenere(message, key)) {
        for (let i = 0; i < message.length; i++) {
            const char = message.charAt(i);
            let charkey = key.charAt(i % key.length);
            let indexkey = 0;
            let indexMsg = 0;
            if (char == ' ') {
                result = `${result} `;
            } else {
                indexkey = lettersUpperCase.indexOf(charkey.toUpperCase());
                indexMsg = lettersUpperCase.indexOf(char.toUpperCase());
                indexMsg = (indexMsg - indexkey + 26) % 26;
                if (uppercase(char)) {
                    result = `${result}${lettersUpperCase[indexMsg]}`;
                } else {
                    result = `${result}${lettersLowercase[indexMsg]}`;
                }
            }
        }
        setResult(result);
    }
}