# language: pt

Funcionalidade: Configuração de produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto
E escolher a quantidade
Para depois inserir no carrinho

Contexto: 
Dado que eu acesse um produto

Cenário: Seleção das caracteristicas do produto
Quando eu escolher a <cor>
E o <tamanho> 
E a <quantidade>
Então deve permitir selecionar o produto

Cenário: Quantidade de produto correta com 9
Quando eu escolher 9 produtos
Então deve permitir a venda

Cenário: Quantidade de produto correta com 10
Quando eu escolher 10 produtos
Então deve permitir a venda

Cenário: Quantidade de produto correta com 11
Quando eu escolher 11 produtos
Então monstrar uma mensagem alertando que a quantidade de produtos excede o limite

Cenário: Botão de limpar
Quando eu clicar no botão "limpar"
Então o produto deverá voltar ao estado original