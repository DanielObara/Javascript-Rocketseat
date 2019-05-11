
const user = {
	nomes: ["Daniel", "Joãos", "Brunos", "Zyad", "Guilherme"],
	empresa: {
		nome: "WeeCode",
		site: "www.weecode.com.br"
	}
};
// Usando desestruturação do obj no primeiro nivel
const { nomes } = user;
console.log(nomes); // ["Daniel", "Joãos", "Bruno", "Zyad", "Guilherme"]

// É o mesmo que:
const nomes1 = user.nomes;
console.log(nomes1); // ["Daniel", "Joãos", "Bruno", "Zyad", "Guilherme"]
// Atribuindo a outroa const no momento de desestruturação
const { nomes: nomes2 } = user;

// Ops.. esqueci do Cristão pois ele está de férias.
// Aplicando o Rest em um array
console.log([...nomes2, "Cristian"]);

// Ou assim com Spread e rest ao mesmo tempo
const novoArr = [...nomes2, "Cristian"];
console.log(novoArr);

// Usando desestruturação do obj no segundo nivel (Um 'atributo' objeto dentro de um objeto)
const {
	empresa: { site }
} = user;
console.log(site); // www.weecode.com.br