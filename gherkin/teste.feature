            # language: pt

            Funcionalidade: Tela de login
            Como aluno do Portal EBAC
            Quero me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de autenticação do portal EBAC

            Cenário: Autenticação válida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de boas vindas "Olá, joão"

            Cenário: Usuário inexistente
            Quando eu digitar o usuário "joao@ebac.com"
            E a senha "senha@123"
            Então deve exibir uma mensagem de alerta "Usário inexistente"

            Cenário: Usuário com senha inválida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "errada"
            Então deve exibir uma mensagem de alerta "Usuário ou senha inválidos"

            Esquema do Cenário: Autenticar múltiplos usuários
            Quando eu digitar o <usuario>
            E a <senha>
            Então deve exibir a <mensagem> de sucesso

            Exemplos:
            | usuario            | senha       | mensagem   |
            | "joao@ebac.com.br" | "teste@123" | "Olá joão" |
            | "joao2@ebac.com.br" | "teste@123" | "Usuário inexistente" |

