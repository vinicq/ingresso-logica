# Sistema de Compra de Ingressos 🎟️

Bem-vindo ao Sistema de Compra de Ingressos! Este projeto é uma aplicação web simples e eficiente, desenvolvida em JavaScript, que permite aos usuários comprar ingressos para diferentes setores de um evento. O sistema verifica a disponibilidade de ingressos em tempo real e ajusta a quantidade disponível conforme as compras são efetuadas.

## Objetivo do Projeto 🎯

Este projeto foi criado com o propósito de treinar a lógica de programação e melhorar habilidades na manipulação do DOM com JavaScript. Ele é ideal para desenvolvedores iniciantes que desejam fortalecer seus conhecimentos e aplicar práticas recomendadas do mercado.

## Descrição do Projeto 📋

O Sistema de Compra de Ingressos permite que os usuários:

- Selecionem o tipo de ingresso: Escolha entre diferentes setores (pista, superior, inferior).
- Verifiquem a quantidade disponível: O sistema verifica automaticamente se há ingressos suficientes antes de processar a compra.
- Efetuem a compra: Após a verificação, o sistema ajusta a quantidade de ingressos disponíveis.
- Recebam feedback em tempo real: Alertas informam o usuário sobre o sucesso da compra ou sobre problemas, como quantidade insuficiente.

## Funcionalidades 🚀

- Verificação de Dados: O sistema garante que apenas valores válidos sejam aceitos como quantidade de ingressos.
- Compra Segura: Verifica a disponibilidade antes de efetuar a compra, garantindo que não sejam vendidos mais ingressos do que o disponível.
- Interface Dinâmica: Atualiza a quantidade de ingressos em tempo real conforme as compras são efetuadas.

## Tecnologias Utilizadas 🛠️

- JavaScript: Linguagem principal usada para a lógica do sistema.
- HTML/CSS: Para estruturar e estilizar a interface do usuário.

## Estrutura do Código 📄

- `comprar()`: Função principal que gerencia o processo de compra, verificando a validade da quantidade e chamando a função `comprarIngresso`.
- `comprarIngresso(qtd, tipo)`: Função que processa a compra, verificando a disponibilidade e atualizando a quantidade de ingressos restantes.

## 📸 Capturas de Tela

![Sistema de Compra de Ingressos](https://github.com/vinicq/ingresso-logica/blob/master/path/to/screenshot.png)

## Como Usar 🎮

1. Clone este repositório para sua máquina local:
   ```bash
   git clone git@github.com:vinicq/ingresso-logica.git
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Selecione o tipo de ingresso, insira a quantidade desejada e clique em "Comprar".
4. O sistema verificará a disponibilidade e ajustará a quantidade de ingressos disponíveis em tempo real.

## Contribuições 🤝

Contribuições são bem-vindas! Se você tem sugestões de melhorias, encontrou bugs ou quer adicionar novas funcionalidades, sinta-se à vontade para enviar um pull request ou abrir uma issue.
