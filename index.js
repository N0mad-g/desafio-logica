let heroiName = "Ghost";
let nivelXp = 6750;

const niveis = [
  { nome: "Ferro", min: 0, max: 1000 },
  { nome: "Bronze", min: 1001, max: 2000 },
  { nome: "Prata", min: 2001, max: 5000 },
  { nome: "Ouro", min: 5001, max: 7000},
  { nome: "Platina", min: 7001, max: 8000},
  { nome: "Ascendente", min: 8001, max: 9000},
  { nome: "Imortal", min: 9001, max: 10000},
  { nome: "Radiante", min: 10001, max: Infinity},
 
];

let nivelHeroi;

for (const nivel of niveis) {
  if (nivelXp >= nivel.min && nivelXp <= nivel.max) {
    nivelHeroi = nivel.nome;
    break;
  }
}

if (nivelHeroi) {
  console.log( heroiName  +  `Seu nível de herói é ${nivelHeroi}`);
} else {
  console.log("Nível de herói desconhecido");
}