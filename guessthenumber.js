const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });        

let continueAsking = true; // Variável booleana para controlar o loop
let magicNumber = Math.floor(Math.random()*999);





// Função para continuar recebendo inputs
function askQuestion() {
  rl.question('Guess the number: ', (input) => {
    if ((parseInt(input) === magicNumber)) {
      continueAsking = false; // Altera a booleana para sair do loop
      rl.close();
      console.log("Este é o número!\nGAME OVER.")
      return true;
    } else {
        console.log(parseInt(input) > magicNumber? "menos!": "mais");
      if (continueAsking) {
        askQuestion(); // Continua perguntando
      }
    }
  });
}

// Inicia o loop
askQuestion();