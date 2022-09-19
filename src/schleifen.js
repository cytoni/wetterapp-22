/**
 * Schleife: for, while, do..while, foreach, for...
 */


for (let i = 0; i < 10; i++) {
   console.log(`${i}. Ich soll pünktlich kommen.`)
}


//const element = array[index];
const zahlen = [1,2,3,4,5,6];
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
}

//rückwärts
for (let i = zahlen.length - 1; i >= zahlen.length; i--) {
    console.log(zahlen[i]);
}

//while
let index =0;
while (zahlen[index] <= 4) {
    console.log(zahlen[index]);
    index++;
}

//for .. of
for (const a of ['a','b','huhu']) {
    console.log(a);
}
/*
console.log('////');
//foreach gibt einen neuen Array zurück, erwartet eine Funktion

function quadrieren(n) {
console.log(n * n);
}
*/
console.log('////');
/**
 * 1. längstes Wort
 * 2. PalindromChecker (otto, anna)
 */
let satz = 'Die Katze sitzt auf der Matraze';
const spalti = satz.split(" ");
let wordlaenge = 0;
function longestWord(satz) {
let wort = spalti[1];

};
console.log(satz);
console.log(spalti[1]);
console.log('jawoll');


console.log('////');
/*
function longestWord(satz) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
};
console.log(longest(satz);
*/

/*
splitSatz.forEach((value) => ) {
    if (wordlength < value.length) {
        wordlength = value.length;
        wort = value;
    }
};*/
/*
for (let i = 0; i < splitSatz.length; i++) {
    if (wordlength < splitSatz[i].length) {
        wordlength = splitSatz[i].length;
    }
}
return wort;
*/

/**
 * PalindromChecker (otto, anna)
 */

/*
 var wort = "Anna";
 var GROSS = wort.toUpperCase();
 function reverseString('AOLUa') {
    return str;
}
reverseString("hello");
console.log(wort);
console.log(GROSS);
 */


function palindromChecker(wort) {
    //Variable mit neuem Wort, kleinbuchstaben, splitten, umdrehen und zusammenführen
    //const neuesWort = wort.toLowerCase().split('').reverse().join('');
    //Lange schreibweise:
    let neuesWort = wort.toLowerCase();
    console.log(neuesWort);
    neuesWort = neuesWort.split('');
    console.log(neuesWort);
    neuesWort = neuesWort.reverse();
    console.log(neuesWort);
    neuesWort = neuesWort.join('');

    //vergleiche Wort mit dem Urwort, wenn gleich, dann true, sonst false
    return wort.toLowerCase() == neuesWort ? true : false;
}
console.log(palindromChecker('Hubert'));
console.log(palindromChecker('Anna'));
