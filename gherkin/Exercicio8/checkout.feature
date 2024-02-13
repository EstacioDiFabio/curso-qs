# language: pt

Funcionalidade: checkout
Como cliente da EBAC-SHOP
Quero fazer concluir meu cadastro   
Para finalizar minha compra

Contexto:
Dado que eu tente salvar um produto

Cenário: Cadastrando todos os campos obrigatórios
Quando eu preencher os campos: Nome, País, Endereço, Cidade, CEP, telefone e Endereço de e-mail
Então o sistema deverá permitir a venda

Cenário: Cadastrando sem os campos obrigatórios
Quando eu deixar alguns dos campos em branco: Nome, País, Endereço, Cidade, CEP, telefone ou Endereço de e-mail
Então o sistema deverá exibir a mensagem "O :campo precisa ser preenchido"

Esquema do Cenário: Campo e-mail com o formato inválido
Quando eu preencher o campo email com o valor <email> 
Então o sistema deverá exibir a mensagem "E-mail com valor incorreto"

Exemplos:
| email |
| "teste.com.br" |
| "email@.com" |
| "usuario@invalido" |
| "invalido-usuario" |

Esquema do Cenário: Campo e-mail com o formato válido
Quando eu preencher o campo email com o valor <email> 
Então o sistema deverá permitir o cadastro

Exemplos:
| email |
| "teste@email.com.br" |
| "email@teste.com" |
| "usuario@invalido.com.br" |
| "invalido-usuario@email.com" |

Cenário: Cadastrando com campos em branco
Quando eu deixo de preencher o campo Nome
Então deve exibir uma mensagem "O campo nome não pode ficar em branco"