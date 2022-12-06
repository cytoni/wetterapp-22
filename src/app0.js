/* 
//Titel ändern
document.title = 'Halloooo';
let title = document.getElementById('headline');
title.innerText = 'Hallo Welt!';
console.log(title);


const input = document.getElementById('city');
//input.placeholder = 'Es liegt was in der Luft';
//input.value = 'Bodensee';
//console.log(input);

//Event Listener
title.addEventListener('click', () => console.log('geklickt'));

title.classList.toggle('rot');



const formular = document.getElementsByTagName('form');
form[0].addEventListener('submit', (event) => {
    //Unterdrücken von default
    event.preventDefault();
    //Wert von input
    console.log(input.value);
};
*/
const title = document.getElementById("headline");
const input = document.getElementById("city");
//Konstante anlegen mit dem Formular Tag
const form = document.getElementById('formular');
//Eventlistener für das Formular bei abschicken
form.addEventListener('submit', (event) => {
  //unterdrücken des normalen Verhaltens des Formular
  event.preventDefault();
  //in die Konsole den Wert des Input schreiben
  document.title = title.innerText = `Das Wetter in ${input.value}`;
  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" + input.value + ",de&limit=1&appid=77f18c0dbed2b3acc583b4b58c5c66c2"
// Andere Schreibweise `https://api.openweathermap.org/geo/1.0/direct?q=${input.value},de&limit=1&appid=77f18c0dbed2b3acc583b4b58c5c66c2`
//"https://api.openweathermap.org/data/2.5/onecall?lat=52.5170365&lon=13.3888599&exclude=current,minutely,hourly,alert&units=metric&lang=de&appid=77f18c0dbed2b3acc583b4b58c5c66c2"
    )
    //Promise als JSON
    .then((response) => response.json())
    //kriegen die Daten
    .then((geodaten) => {
      //wenn es die Stadt nicht gibt
      if (geodaten.length == 0) {
        throw new Error("Diese Stadt gibt es nicht.");
      }
      return (geoMob = {
        lat: geodaten[0].lon,
        lon: geodaten[0].lon,
      });
    })
    .then((geocode) => console.log(geocode))
    //.catch((error) => console.log(error.message));
    .catch((error) => document.title = title.innerText = error.message);
});

//
fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alert&units=metric&lang=de&appid=77f18c0dbed2b3acc583b4b58c5c66c2`
)

//fetch(url).then(function).then(function).then(function)


//REST API

