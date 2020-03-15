
const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const textElement = document.querySelector('#app h3');
const buttonElement = document.querySelector('#app button');
var username = '';


function exibirRepositorios(){
    listElement.innerHTML = '';
}

exibirRepositorios();
function searchUser(){
    username = inputElement.value;
    inputElement.value = '';
    axios.interceptors.request.use((config) =>{
        textElement.innerHTML = `CARREGANDO...`;
        return config;
    })
axios.get(`https://api.github.com/users/${username}/repos`)
.then((response) => {
        for(const repo of response.data){
            textElement.innerHTML = `Os repositorios do ${username} são:`;
            viewReposi = document.createElement('li');
            txtReposi = document.createTextNode(repo.name);
            viewReposi.appendChild(txtReposi);
            listElement.appendChild(viewReposi);
        }
})
.catch((error) => {

            textElement.innerHTML = `[ ERROR 404 ]`;
            viewReposi = document.createElement('li');
            txtReposi = document.createTextNode("USUARIO NÃO ENCONTRADO");
            viewReposi.appendChild(txtReposi);
            listElement.appendChild(viewReposi);
             console.log(error);
            
            
});
    exibirRepositorios();
}

buttonElement.onclick = searchUser;