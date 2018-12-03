window.cipher = {
    encode: (offSet,string) => {
        let asciiCode;
        let newAscii;
        let textOutput = '';
        for (let i=0; i<string.length; i++) {
            asciiCode=string.charCodeAt(i);
            if (asciiCode>=65 && asciiCode<=90) {                 //para las mayusculas
                newAscii=((asciiCode - 65 + offSet) % 26 + 65);
                textOutput+=String.fromCharCode(newAscii);
            }
            else if (asciiCode>=97 && asciiCode<=122) {           //para las minusculas
              newAscii = ((asciiCode - 97 + offSet)%26+97);
              textOutput+=String.fromCharCode(newAscii);
            }
            else{                                                 //Cualquier otro caracter
              textOutput+=String.fromCharCode(asciiCode);
            }
        }
        return textOutput;
    },
    decode: (offSet,string) => {
        let asciiCode;
        let newAscii;
        let textOutput = '';
        for (let i=0; i < string.length; i++) {
            asciiCode=string.charCodeAt(i);
            if (asciiCode>=65 && asciiCode <=90) {            //para las mayusculas
                newAscii = (asciiCode - 90 - offSet) % 26 + 90;
                textOutput+=String.fromCharCode(newAscii);
            }
            else if (asciiCode >=97 && asciiCode <=122) {     //para las minusculas
                newAscii = (asciiCode - 122 - offSet) % 26 + 122;
                textOutput+=String.fromCharCode(newAscii);
            }
            else {                                            //Cualquier otro caracter
                textOutput+=String.fromCharCode(asciiCode);
            }
        }
        return textOutput;
    },
    createCipherWithOffset: (offSet) => {
        let objectCipher = {
            encode: (string) =>
                cipher.encode(offSet,string),
            decode: (string) =>
                cipher.decode(offSet,string)
        };
        return objectCipher;
    }
};
