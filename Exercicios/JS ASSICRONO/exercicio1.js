var idade = 18;
function checaIdade(){
     return new Promise ((resolve, reject) => {
       setTimeout(() =>{
        if(idade < 18){  
            reject(idade);
        }else{
           resolve(idade);
        }
       }, 2000);
      });
}

checaIdade()
    .then((response) => {
        console.log("Maior de idade");
        alert(`Você tem ${idade} anos, e é maior de idade`);
    })
    .catch((error) => {
        console.log("Menor de idade");
        alert(`Você tem ${idade} anos, e é menor de idade`);
    });
    