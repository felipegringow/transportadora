async function mostraCidades() {
    fetch('./data/cidades.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.querySelector('.lista-cidades');
            data.forEach(cidade => {
                const item = document.createElement('li');
                item.className = 'cidades';
                item.textContent = cidade;
                lista.appendChild(item);
            });
        });
}
mostraCidades();

async function mostraVeiculos() {
    fetch('./data/veiculos.json')
        .then(resposta => resposta.json())
        .then(dados => {
            const ul = document.querySelector('ul');
            dados.forEach(veiculo => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="veiculo">${veiculo.veiculo}</span> <br> ${veiculo.qtd} unidades`;
                ul.appendChild(li);
                li.className = 'listaVeiculos'
            })
        })
}
mostraVeiculos();

function scrolll(el){
    document.querySelector(el).scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
    })
}

function cotacaoFrete() {
    const prazo = document.querySelector('select');
    const valorPrazo = Number(prazo.options[prazo.selectedIndex].value);
    const peso = Number(document.querySelector('input').value);

    let pesoTabela = 0;

    if (peso <= 5) {
        pesoTabela = 30;
    } else if (peso > 5 && peso <= 50) {
        pesoTabela = 55;
    } else if (peso > 50 && peso <= 100) {
        pesoTabela = 100;
    } else {
        document.querySelector('.orcamento').innerHTML = `Poxa, sua mercadoria passa de 100kg. Entre em contato conosco para encontrarmos uma solução!`
        return
    }

    const valor = (pesoTabela + valorPrazo) / 1.5;

    document.querySelector('.orcamento').innerHTML = `Seu frete fica por apenas R$${valor.toFixed(2)}!`
}

document.querySelector('.cotar').disabled = true;
document.querySelector('.peso').addEventListener("input", function (event) {
    let peso = Number(document.querySelector('input').value);
    
    if (peso !== 0) {
        document.querySelector('.cotar').disabled = false;
    } else {
        document.querySelector('.cotar').disabled = true;
    }
})

