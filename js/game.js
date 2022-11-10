function hod() {
    let kostkacislo1 = document.querySelector(".img1");
    let kostkacislo2 = document.querySelector(".img2");

    kostkacislo1.setAttribute("src", "img/diceroll.gif");
    kostkacislo2.setAttribute("src", "img/diceroll.gif");

    let result = document.querySelector('h1')
    result.innerHTML = ""
    setTimeout(() => {
        let cislo1 = Math.floor(Math.random() * 6) + 1;
        let cislo2 = Math.floor(Math.random() * 6) + 1;

        kostkacislo1.setAttribute('src', 'img/dice' + cislo1 + '.png');
        kostkacislo2.setAttribute('src', 'img/dice' + cislo2 + '.png');

        //determine the winner
        if (cislo1 === cislo2) {
            result.innerHTML = "REMÍZA!"
        }
        else if (cislo1 < cislo2) {
            result.innerHTML = (hrac2 + " VYHRÁL!");
        }
        else {
            result.innerHTML = (hrac1 + " VYHRÁL!");
        }

    }, 2500);
}

let hrac1 = "Hráč 1";
let hrac2 = "Hráč 2";

function jmena() {
    hrac1 = prompt("Změn jméno Hráč 1")
    hrac2 = prompt("Změn jméno Hráč 2")

    if (hrac1.length < 1 || hrac2.length < 1) {
        alert('please enter valid name');
        return;
    }
    document.querySelector("p.hrac1")
        .innerHTML = hrac1;

    document.querySelector("p.hrac2")
        .innerHTML = hrac2;
}
