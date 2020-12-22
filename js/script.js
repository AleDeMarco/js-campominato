numeriBomba = [];
numeriUser = [];
gameOver = false;
tentativi = 100 - 16;

while (numeriBomba.length < 16) {
  var numero = randomN(1, 100);
  if (numeriBomba.includes(numero) == false) {
    numeriBomba.push(numero);
  }
}

while (numeriUser.length < tentativi && gameOver == false) {
  var numero = parseInt(prompt('Inserisci un numero da 1 a 100:'));
  if (numero < 1 || numero > 100) {
    alert('Inserire un numero tra 1 e 100!');
  }
  if (numeriUser.includes(numero) == false) {
    numeriUser.push(numero);
  }
  else {
    alert('Il numero era già inserito!');
  }
  if (numeriBomba.includes(numero) == true) {
    gameOver = true;
  }
}

for (var i = 0; i < numeriBomba.length; i++) {
  document.getElementById('bomba').innerHTML += numeriBomba[i] + ' ';
}

for (var i = 0; i < numeriUser.length; i++) {
  document.getElementById('user').innerHTML += numeriUser[i] + ' ';
}

if (gameOver == false) {
  document.getElementById('risultato').innerHTML = 'vittoria!';
}
else {
  document.getElementById('risultato').innerHTML = 'sconfitta...';
}

document.getElementById('punteggio').innerHTML = numeriUser.length;

function randomN(n1, n2) {
  return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
}
