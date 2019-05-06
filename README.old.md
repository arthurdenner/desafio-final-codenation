# Projeto GitHub

## Descrição

Neste projeto iremos construir uma aplicação semelhante ao GitHub.
Iremos ter uma linha do tempo do GitHub que cria um histórico visual de uma atividade dos usuários do GitHub. Neste projeto iremos utilizar um username e produzir uma timeline contento cada repositório e situando os nomes dos repositórios, a data que eles foram criados e suas descrições.
**Obs:** Somente repositórios públicos devem ser mostrados.

## Objetivos

- O usuário pode digitar um nome de usuário do GitHub.
- O usuário pode clicar em um botão para criar e mostrar o repositório do usuário com sua timeline.
- O usuário pode ver um mensagem de erro se o username do GitHub não for válido.
- O usuário pode ver um resumo do número de repos registrados pelo ano em que foram criados
- O usuário pode buscar repositórios/projetos por tipo de linguagem de programação

## Recursos

O GitHub oferece duas API’s e você pode utilizar para ter acesso aos dados de repositórios, você também pode utilizar um package do NPM para acessar a API do GitHub.
Documentação:

- [GitHub REST API](https://developer.github.com/v3/)
- [GitHub GraphQL API V4](https://developer.github.com/v4/)

## Critérios de Aceitação

- Aplicativo inicia com npm install e npm start (yarn também é válido).
- Aplicativo possuí um README que detalha o App.

**Obs:** Somente a pasta "src/" será submetida para Code Review.

### Gerenciamento de Estado

- O App é gerenciado pelo Redux 
- A maioria dos estados são gerenciados pela Redux Store.
- As atualizações são disparadas pelo dispatch.
- Os reducers estão definidos de forma correta

### Desenvolvimento extra da Aplicação

- Os componentes estão corretamente definidos.
- Uso correto do Lifecycle na aplicação.
- As funções estão escritas de forma correta e de fácil entendimento.
- Não há código repetido.
- Uso de testes na aplicação com coverage de 80% no mínimo.
- Utilização de bibliotecas, como: GraphQL, Relay, Apollo e Saga.
- Utilização de Styled Components ou Emotion.
