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


//Der Tag Woche
document.getElementsByClassName("wochentage")[j].innerText = wochentage(
    weather.daily[i].dt
  );