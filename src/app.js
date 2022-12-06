import wochentage from "./helper";
//
const title = document.getElementById("headline");
//title.innerText = "Hallo Welt";
const input = document.getElementById("city");
//Konstante anlegen mit dem Formular Tag
const form = document.getElementById("formular");
//Eventlistener für das Formular bei abschicken
form.addEventListener("submit", (event) => {
  //unterdrücken des normalen Verhaltens des Formular
  event.preventDefault();
  //Mein Fetch der geodaten
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${input.value},de&limit=1&appid=77f18c0dbed2b3acc583b4b58c5c66c2`
  )
    //Promise als JSON
    .then((response) => response.json())
    //Kriegen die Daten
    .then((data) => {
      //wenn es die Stadt nicht gibt Fehler werfen
      if (data.length == 0) {
        throw new Error("Diese Stadt können wir leider nicht finden.");
      }
      //Gebe mir zurück bzw an das nächste ein Objekt mit Properties, die Wir benötigen
      const d = data[0];
      return (geoCode = {
        name: d.name,
        lat: d.lat,
        lon: d.lon,
      });
      //return ({ name, lat, lon } = data[0]);
    })
    .then((geoCode) => {
      /**
       * In den title & in die Überschrift solle stehen: Das wetter in {ort}
       */
      //Objekt Destrukturierung
      const { name, lat, lon } = geoCode;
      document.title = title.innerText = `Das Wetter in ${name}`;
      //neuer Fetch
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alert&units=metric&lang=de&appid=77f18c0dbed2b3acc583b4b58c5c66c2`
      )
        .then((response) => response.json())
        //.then((weather) => console.log(weather.daily[0].weather[0].description))
        .then((weather) => {
            //Die Description von "heute" setzen
            document.querySelector(".heute p").innerText =
            weather.daily[0].weather[0].description;
            //Die min Temp von heute setzen
            document.querySelectorAll(".grad")[0].innerText = Math.round(
            weather.daily[0].temp.min
            );
            //die max Temp von heute setzen
            document.querySelectorAll(".grad")[1].innerText = Math.round(
            weather.daily[0].temp.max
            );
            //das Wetter icon von heute setzen
            document.querySelector(
            ".heute img"
            ).src = `https://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`;
            
            for (let i = 1, j = 0; i <= 5; i++, j++) { 
            //weather von card
            document.getElementsByClassName("wetter")[j].innerText =
            weather.daily[i].weather[0].description;
            //icon von card setzen
            document.querySelectorAll(
                ".card img"
                )[j].src = `https://openweathermap.org/img/wn/${weather.daily[i].weather[0].icon}@2x.png`;
            //die min Temp von Klasse min
            document.getElementsByClassName("min")[j].innerText = Math.round(
                weather.daily[i].temp.min);
            //die max Temp von setzen
            document.getElementsByClassName("max")[j].innerText = Math.round(
            weather.daily[i].temp.max);
            //Der Tag Woche
            document.getElementsByClassName("wochentage")[j].innerText = wochentage(
                weather.daily[i].dt);}

        });
      }
      //  .then((weather) => document.getElementsByClassName("wetter").innerText = weather.daily[0].weather[0].description)

      //endet der inner Fetch
      )
    .catch((error) => {
      //Fehler auf der Seite ausgeben unterhalb des Ein
      document.getElementsByClassName("error")[0].innerText = error.message;
    });
});
input.addEventListener(
  "keydown",
  () => (document.getElementsByClassName("error")[0].innerText = "")
);
//https://api.openweathermap.org/data/2.5/onecall?lat=52.5170365&lon=13.3888599&exclude=current,minutely,hourly,alert&units=metric&lang=de&appid=77f18c0dbed2b3acc583b4b58c5c66c2

//dail[0].weather.description
