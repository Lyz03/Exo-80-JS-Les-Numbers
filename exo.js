// exo 1
let pIsInteger = document.getElementById('is-integer');

if (Number.isInteger(parseFloat(pIsInteger.innerText))) {
    pIsInteger.innerText += " ==> est un nombre entier."
} else {
    pIsInteger.innerText += " ==> n'est pas un nombre entier."
}

// exo 2
let pIsNaN = document.getElementById('is-nan');

if (Number.isNaN(parseInt(pIsNaN.innerText))) {
    pIsNaN.innerText += " ==> est NaN ( Not a Number )"
} else {
    pIsNaN.innerText += " ==> est un nombre."
}

// exo 3
let pParseFloat = document.getElementById('parse-float');

pParseFloat.innerText += ' ' + (parseFloat(pParseFloat.innerText) * 16);

// exo 4
let  pParseInt = document.getElementById('parse-int');

pParseInt.innerText += ' ' + parseInt((parseInt(pParseInt.innerText) / 16).toString());

// exo 5
let pToFixed = document.getElementById('to-fixed');

pToFixed.innerText = parseFloat(pToFixed.innerText).toFixed(2);