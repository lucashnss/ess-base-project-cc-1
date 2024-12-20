Feature: Vizualização da tela principal
as a um usuário
I want to vizualizar a tela inicial do sistema.
Para escolher quais filmes/séries irei assisir.

Scenario: O usuário acbaou de entrar na tela inicial.
Given O usuário “João” fez o login e chegou ate a tela principal.
And o sistema disponibiliza toda a blibioteca de filmes e séries.
When “João” encontra o filme/série que quer assistir.
And “João” clica no filme/série escolhido e o assite.
