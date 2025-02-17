Feature: test

Scenário: Buscar filmes com filtro "Ação"
    
    Given existe uma lista de filmes blocados no gênero "ação"
    When uma requisição GET para "/filmes/Gênero/Ação" é feita
    Then o status da resposta é "200 ok"
    And o corpo da resposta (JSON) contém os filmes da lista "Ação"