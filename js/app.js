function comprar() {
    // Obtém o tipo de ingresso selecionado e a quantidade desejada
    const tipo = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value, 10);

    // Verifica se a quantidade inserida é um número positivo válido
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Chama a função comprarIngresso para processar a compra com o tipo e a quantidade especificados
    comprarIngresso(qtd, tipo);
}

function comprarIngresso(qtd, tipo) {
    const elementIds = {
        pista: 'qtd-pista',
        superior: 'qtd-superior',
        inferior: 'qtd-inferior'
    };

    // Determina o ID do elemento baseado no tipo de ingresso selecionado
    const elementId = elementIds[tipo];

    // Se o tipo de ingresso for inválido, exibe um alerta e sai da função
    if (!elementId) {
        alert('Tipo de ingresso inválido');
        return;
    }

    // Obtém a quantidade disponível de ingressos do tipo selecionado
    const qtdDisponivel = parseInt(document.getElementById(elementId).textContent, 10);

    // Verifica se há ingressos suficientes para a quantidade solicitada
    if (qtd > qtdDisponivel) {
        alert('Não há mais ingressos disponíveis');
        return;
    }

    // Atualiza a quantidade de ingressos disponíveis após a compra
    document.getElementById(elementId).textContent = qtdDisponivel - qtd;
    alert('Compra efetuada com sucesso!');
}
