
console.log('Halli Galli');

/**
 * JSON = Javascript Object Notation
 */
//Variablen var, let und const
//Variable deklariert und initialisiert
var name = 'Markus'; // string
var name = 56567; // integer
var name = true; // boolean

//let
let vorname = 'markus';
console.log('der erste Buchstbe ist ' + vorname[0]);
console.log(vorname);
vorname = 'Michael';
console.log(vorname);

//Konstanten (nicht änderbar)
const gruss = 'Hallo';
console.log(gruss, vorname);

//Array numerischer (Index beginnt immer bei 0)
const array = ['Markus,', 'Anatol', 'Alexandra', 'Claudia'];
console.log(array[4]);
//Ausgabe des Wertes an der n-ten Stelle
console.log(array[0]);

//Ändern eines Wertes in einem Array (Karl)
array[0] = 'Karl';
console.log(typeof array);
console.log(array.length);

//Object (Properties und Methoden, Key: Value)
const obj = {
    name: 'Alexandra',
    haustier: 'Katze',
};

//Der Satz 'Alexandra hat eine Katze'
console.log(obj.name + ' hat eine ' + obj.haustier);
//String literals mit Backticks
console.log(`${obj.name} hat eine ${obj.haustier}`);

//Ändern eines Propertywertes
obj.haustier = 'Hund';
console.log(`${obj.name} hat eine ${obj.haustier}`);
//Neues Property hinzufügen
obj.stadt = 'Berlin';
// Property löschen
// delete obj.stadt;
console.log(obj.stadt);

//Objekt clonen (deep copy und shallow copy)
const obj2 = obj; //Kopie der Referenz eines Objekts
obj2.name = 'Anatol';
console.log(obj2, obj);

//Deep Copy mit Spread Operator
const obj3 = { ...obj };
obj3.name = 'Markus';
obj3.stadt = 'Göttingen';

console.log(obj, obj3);

console.log(obj3.name.toUpperCase());

//Funktionen summieren definiert
function summe(a, b) {
    return a + b;
}
//ES6 schreibweise (Arrow Function)
const summe2 = (a, b) => a + b;

//Aufrufen und ausgeben der Funktion sum mit konkreten Werten
console.log(summe2(4, 6));

//Funktion dividieren (Name teilen)
/**
 * Die Funktion teilt zwei Zahlen
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function teilen(a, b) {
    return a / b;
}

console.log(teilen(8, 2));
const teilenZwei = (a, b) => {
if (b == 0) { //True or False
    return 'Du darfst nicht durch 0 teilen!'; //Error Meldung
}
return a / b;
};

console.log(teilenZwei(24, 0));

//Javascript Klassen haben keine access modifier (public, private, pro...)
//Javascript keine abstract class

//Mit ternary Operator
const teilenDrei = (a,b) => b == 0 ? 'Du darfst nicht durch null teilen' : a / b;
console.log(teilenZwei(24, 0));

let string = 'Bernd';
string +='ilein';


