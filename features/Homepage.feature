Feature: Vizualização da tela principal
as a um usuário
I want to vizualizar a tela inicial do sistema.
Para escolher quais filmes/séries irei assisir.

Scenario: O usuário acbaou de entrar na tela inicial, após realizar o login.
Given O usuário “João” fez o login e chegou até a tela principal.
And é mostrado na tela inicial o filme em destque "Deadpool 2", e mais 3 filmes a baixo do painel do filme em destquem, sendo eles os mais vistos da semana:"The batman", "O ultimo samurai" e "Coraline"
When “João” desce a pagina e econtra mais 3 filmes destacados com "Ação" : "Os mercenários", "Ong Bak" e "John wick". 
And “João” seleciona o filme "Ong bak" e é direcionado a tela reprodução do filme.

