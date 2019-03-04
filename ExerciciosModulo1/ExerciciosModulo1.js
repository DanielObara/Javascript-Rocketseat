//Exercicio 1:
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};
const { rua, numero, bairro, cidade, uf } = endereco;
console.log(`O usuário mora em ${cidade} / ${uf}, no bairro
${bairro}, na rua "${rua}" com nº ${numero}.`);

/*--------------------------------------------------------------------------------------------------*/
//Exercicio 2:
const pares = (x, y) => {
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
pares(1, 20);
/*--------------------------------------------------------------------------------------------------*/
//Exercicio 3:
const validaSkill = skills => {
  if (skills.indexOf("Javascript") !== -1) {
    return console.log("Tem a skill");
  } else {
    console.log("Não tem a skill");
  }
};
var skills = ["Boostrap", "React", "CSS", "HTML"];
validaSkill(skills);
validaSkill([...skills, "Javascript"]);
/*--------------------------------------------------------------------------------------------------*/
//Exercício 4:
const calcExp = age => {
  switch (true) {
    case age >= 0 && age <= 1:
      console.log(`Você tem ${age} anos de exp, seu nível é: Iniciante`);
      break;
    case age >= 1 && age <= 3:
      console.log(`Você tem ${age} anos de exp, seu nível
é: Intermediário`);
      break;
    case age >= 3 && age <= 6:
      console.log(`Você tem
${age} anos de exp, seu nível é: Avançado`);
      break;
    default:
      console.log(`Você
tem ${age} anos de exp, seu nível é: Jedi Master `);
      break;
  }
};
calcExp(1);
calcExp(3);
calcExp(6);
calcExp(10);
/*--------------------------------------------------------------------------------------------------*/
//Exercício 5

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
];

const showMessage = usuarios => {
  for (const user of usuarios) {
    const { nome, habilidades } = user;
    console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
  }
};
