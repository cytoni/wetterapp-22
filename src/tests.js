function getAge(oDate)
{
    let diff_ms = Date.now() - oDate.getTime();
    let age_ms = new Date(diff_ms);
    let age_years = age_ms.getUTCFullYear() - 1970;
    return age_years < 0 ? NaN : age_years;
}

let oBirthDay = new Date(2009, 11, 02);
console.log(getAge(oBirthDay));

/* Hund
https://www.orangefreesounds.com/wp-content/uploads/2021/05/Medium-sized-dog-barks.mp3

Katze
https://www.orangefreesounds.com/wp-content/uploads/2022/04/Cat-sound-meow.mp3
*/

/* int Spiel[] = new int[16];
for (int i=1; i<Spiel.length; i++) {
	if (i==Spiel.length-1) {
		Spiel[i] = 1;
	} else {
		Spiel[i] = i;
	}
	System.out.println("Spiel an index: "+i+", Wert: "+Spiel[i]);
} */


/*
const nodeList = document.querySelectorAll();
document.getElementById("birthday").innerHTML = nodeList.length;
*/

const heute = new Date()
const gestern = new Date(heute)

gestern.setDate(gestern.getDate() - 1)
document.querySelector(".result").innerHTML = "Heute " + heute.toLocaleString() + "<br> Gestern " + gestern.toLocaleString();

const date = new Date(heute.setMonth(heute.getMonth() - 24)) 
document.querySelector(".month").innerHTML = "Heute vor 2 Jahren " + date.toLocaleString();