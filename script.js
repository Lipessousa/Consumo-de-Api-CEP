
function consulta(){
    let cep = document.querySelector('#CEP').value;
    if(cep.length !== 8 ){
        alert('CEP invalido');
        return
    }


    fetch(`https://viacep.com.br/ws/${cep}/json/`).then( resposta =>{
        return resposta.json()
    }).then(conteudo =>{
        console.log(conteudo)
        document.getElementById('Logradouro').innerText = conteudo.logradouro
        document.getElementById('Bairro').innerHTML = conteudo.bairro
        document.getElementById('Cidade').innerHTML = conteudo.localidade
        document.getElementById('UF').innerHTML = conteudo.uf
    });
}