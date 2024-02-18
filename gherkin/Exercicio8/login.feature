# language: pt

Funcionalidade: Login
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma  
Para visualizar meus pedidos

Contexto: 
Dado que eu clique no botão logar

Esquema do Cenário: Usuário insere os dados corretos
Quando eu insiro o <usuario> e a <senha>
Então sou direcionado para a tela de checkout

Exemplos:
| usuario | senha | 
| "teste@email.com.br" | "senha123" |
| "teste@email.com" | "senhaadmin" |
| "email@teste.com.br" | "admin123" | 
| "email@teste.com" | "senhaadmin123" | 

Esquema do Cenário: Usuário insere os dados errados
Quando eu insiro o <usuario> e a <senha>
Então deve exibir uma mensagem de alerta "Usuário ou senha incorretos"

Exemplos: 
| usuario | senha | 
| "teste@email.com.br" | "senha456" |
| "teste333@email.com" | "senhaadmin" |
| "email@teste.com.br" | "admin333" | 
| "email@testecom" | "senhaadmin123" | 
