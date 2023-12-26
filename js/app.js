// Função principal para compra de ingressos
function comprar() {
    // Obter elementos do DOM
    let tipo = document.getElementById('tipo-ingresso');
    let qtdInput = document.getElementById('qtd');
    let qtd = parseInt(qtdInput.value);

    // Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Verifica o tipo de ingresso selecionado e chama a função de compra correspondente
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    } else {
        comprarSuperior(qtd);
    }
}

// Função para comprar ingresso tipo pista
function comprarPista(qtd) {
    // Obter a quantidade disponível de ingressos tipo pista
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    // Verificar disponibilidade de ingressos
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista!');
    } else {
        // Atualizar a quantidade disponível e notificar a compra bem-sucedida
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

// Função para comprar ingresso tipo cadeira inferior
function comprarInferior(qtd) {
    // Obter a quantidade disponível de ingressos tipo cadeira inferior
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    // Verificar disponibilidade de ingressos
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo cadeira inferior!');
    } else {
        // Atualizar a quantidade disponível e notificar a compra bem-sucedida
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

// Função para comprar ingresso tipo cadeira superior
function comprarSuperior(qtd) {
    // Obter a quantidade disponível de ingressos tipo cadeira superior
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    // Verificar disponibilidade de ingressos
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo cadeira superior!');
    } else {
        // Atualizar a quantidade disponível e notificar a compra bem-sucedida
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}
