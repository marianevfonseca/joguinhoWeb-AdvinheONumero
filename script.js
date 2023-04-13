function pulaLinha() {
    console.log ("<br>");
    console.log ("<br>");
}

function mostra (frase) {
   document.write(frase);
   pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);
var chute = parseInt(prompt("Já pensei. Qual você acha que é?"))  

if(chute == numeroPensado) {
mostra("Você acertou,eu pensei no " + numeroPensado);
}

if(chute != numeroPensado) {
mostra ("Você errou, o numero pensado foi " + numeroPensado);
}