let vitoria = 100;
let derrota = 5;
let saldo = 0;
let elo = "";

function level(vitoria, derrota){
  saldo = vitoria - derrota;

  if(saldo >= 101){
    elo = "Imortal";
  }
  else if(saldo >= 91){
    elo = "Lendário"
  }
  else if(saldo >= 81){
    elo = "Diamante"
  }
  else if(saldo >= 51){
    elo = "Ouro"
  }
  else if(saldo >= 21){
    elo = "Prata"
  }
  else if(saldo >= 11){
    elo = "Bronze"
  }
  else{
    elo = "Ferro"
  }

  return elo;
}

console.log("O herói de saldo de " + saldo + " vitórias está no nível de " + level(vitoria, derrota))