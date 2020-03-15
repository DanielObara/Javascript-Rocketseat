/* EXERCICIO 5 

const usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function exibirUser(){
    for( let exibir of usuarios){
        console.log(`"O ${exibir.nome} possui abilidades em: ${exibir.habilidades}"`);
    }
}

const mostrar = exibirUser(usuarios);

*/


/*           EXERCICIO 4 

function experiencia(anos){
 
    switch(anos){
        case 0:
        case 1:
           console.log("Iniciante");
            break;
        case 2:
        case 3:
            console.log("Intermediario");
            break;
        case 4: 
        case 5:
        case 6:
            console.log("Avançado");
            break;
        default:
        console.log("Jedi Master");
    }
}
var anosEstudo = 7;
experiencia(anosEstudo);

console.log(`Você tem ${anosEstudo} anos de estudos`);
*/


/* EXERCICIO 3
var skills = ["React JS", "React Native", "Javascript"];
var search = skills.indexOf("Javascript");
function temHabilidade(){
    if(search != -1){
        console.log(`O array contem ${skills}, o objeto procurado está na posição ${search}, e a relação é ${temHabilidade()}`);
    
        return true;
    }else{
        console.log(`Objeto não encotrado!`);
        return false;
    }
}


console.log(temHabilidade());
*/

/* EXERCICIO 2
var pares = [];
function exibiPares(x, y){
    while(x<=y){
        if(x%2 == 0){
            pares.push(x);
        }
        x++
    }
}
exibiPares(1, 1000);
console.log(pares);
          */


/*          EXERCICIO 01
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro", 
    cidade: "São Paulo",
    uf: "SP"
};

console.log(
    `O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua}, de Nº ${endereco.numero}.`);
    */