//Declarando costantes
const inputElementOffSet = document.getElementById('offSet');
const inputElementText1 = document.getElementById('text1');
const inputElementText2 = document.getElementById('text2');
const buttonEncode = document.getElementById('encode');
const buttonDecode = document.getElementById('decode');

//Agregando una funcion al evento click de los button

buttonEncode.addEventListener('click', () =>{
    const offSet= parseInt(inputElementOffSet.value)
    inputElementText2.value=cipher.encode(offSet,inputElementText1.value );
})


buttonDecode.addEventListener('click', () =>{
    const offSet= parseInt(inputElementOffSet.value)
   inputElementText2.value=cipher.decode(offSet,inputElementText1.value );
})