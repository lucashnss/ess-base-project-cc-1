Feature: O usuário quer escolher um gênero especifico para um filme

Scenario: Busca pelo filtro de de gênero

Given “João” esta na pagina inicial.
When “João” clica na aba de “busca por filtros”.
And “Busca por filtros” abre uma janela com as opções de filtros disponiveis
When “João” Clica em um filtro “X” 
Then o sistema mostra a lista de filmes/séries com o filtro “X”
And "essa parte ainda será preenchida"
