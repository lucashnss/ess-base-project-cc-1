Feature: Cadastro e manutenção de usuários
	As a usuário do sistema
	I want to criar, atualizar, e deletar minha informação pessoal
	so that eu possa gerenciar os detalhes da minha conta de forma segura e os manter atualizados

Scenario: Cadastro de usuário bem-sucedido
Given o usuário “LucasHenrique” está na página de “Cadastro de usuários”
And o usuário “LucasHenrique” não está cadastrado no sistema
When o usuário preenche “Nome completo”, “Usuário/Email”, “Senha”, “Data de nascimento”, “Gênero” e “Foto” com, respectivamente, 
“Lucas Henrique”, “LucasHenrique”,”X”, “20/02/2004”, “Masculino”, “minha-foto.jpg”
Then o usuário recebe um aviso de cadastro bem-sucedido
And o usuário com os dados “Lucas Henrique”, “LucasHenrique”, “X”, “20/02/2004”, “Masculino”, “minha-foto.jpg”, respectivamente, 
“Nome completo”, “Usuário/Email”, “Senha”, “Data de nascimento”, “Gênero” e “Foto”,  é devidamente armazenado no sistema

Scenario:  Alteração de dados cadastrais bem-sucedido
Given o usuário “LucasHenrique” está na página de “Dados cadastrais” 
And possui como “Nome completo”, “Usuário/Email”, “Senha”, “Data de nascimento”, “Gênero” e “Foto”, respectivamente, 
“Lucas Henrique”, “LucasHenrique”, ”X”, “20/02/2004”, “Masculino”, “minha-foto.jpg”
When o usuário altera sua “Data de nascimento”, de  “20/02/2004” por “20/02/1994”
And insere sua “Senha” corretamente, “X”
Then ele recebe um aviso de alteração cadastral bem-sucedido
And o usuário pode ver que seus dados “Nome completo”, “Usuário/Email”, “Senha”, “Data de nascimento”, “Gênero” e “Foto” são, 
respectivamente, “Lucas Henrique”, “LucasHenrique”, ”X”, “20/02/1994”, “Masculino”, “minha-foto.jpg”