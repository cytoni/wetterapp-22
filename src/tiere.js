//Javascript Array of Objects
// ImageURLs: https://vorstadtcowboy.github.io/images/{name des tieres in kleinbuchstaben}.webp
const animals = [
    {
      name: 'Enrico',
      species: 'Hund',
      sex: 'männlich',
      race: 'Laika',
      birthday: '2009-11-02',
    },
    {
      name: 'Tico',
      species: 'Hund',
      sex: 'männlich',
      race: 'Dackel-Mix',
      birthday: '2019-09-28',
    },
    {
      name: 'Hilde',
      species: 'Hund',
      sex: 'weiblich',
      race: 'Schnauzer-Mix',
      birthday: '2011-03-15',
    },
    {
      name: 'Susi',
      species: 'Katze',
      sex: 'weiblich',
      race: 'EKH',
      birthday: '2014-04-10',
    },
    {
      name: 'Kalle',
      species: 'Katze',
      sex: 'männlich',
      race: 'EKH',
      birthday: '2020-06-01',
    },
    {
      name: 'Rosi',
      species: 'Katze',
      sex: 'weiblich',
      race: 'EKH',
      birthday: '2016-08-22',
    },
  ];
  
  // Ab hier kommt dein Javascript
  function getAlter(jesus)
{
    let gott = Date.now() - jesus.getTime();
    let wazzup = new Date(gott);
    let jahre = wazzup.getUTCFullYear() - 1970;
    return jahre < 0 ? NaN : jahre;
}

function alter(geburtstag) {
  const age = Math.floor(
    (Date.now() - new Date(geburtstag)) / (1000 * 60 * 60 * 24 * 365)
  );
  if (age <= 2) {
    return `1 Jahr`;
  }
  return `${age} Jahre`;
}

/*let alta = new Date(2009, 11-1, 02+1);*/
let alta = new Date(2009, 11-1, 02+1);
console.log(getAlter(alta));
console.log(alta);
console.log("alta");
console.log(Date());

/* vor.addEventListener("click", vor)
addEventListener("click", zur)
 */

  let anatol=0;
  function zur() {
    anatol--;
    zur.removeAttribute("disabled")
    if (anatol >= 0) {
    document.getElementById("tierfoto").src = "https://vorstadtcowboy.github.io/images/" + animals[anatol].name.toLowerCase() + ".webp";
    document.getElementById("name").innerHTML = animals[anatol].name;
    document.getElementById("species").innerHTML = animals[anatol].species;
    document.getElementById("sex").innerHTML = animals[anatol].sex;
    document.getElementById("race").innerHTML = animals[anatol].race;
    document.getElementById("birthday").innerHTML = animals[anatol].birthday;
  }
}
  function vor() {
    anatol++;
    document.getElementById("tierfoto").src = "https://vorstadtcowboy.github.io/images/" + animals[anatol].name.toLowerCase() + ".webp";
    document.getElementById("name").innerHTML = animals[anatol].name;
    document.getElementById("species").innerHTML = animals[anatol].species;
    document.getElementById("sex").innerHTML = animals[anatol].sex;
    document.getElementById("race").innerHTML = animals[anatol].race;
    document.getElementById("birthday").innerHTML = getAlter(alta);
  }

/* 
const p = document.createElement("p");
p.innerText = "Hallo";
document.appendChild(p);
 */
