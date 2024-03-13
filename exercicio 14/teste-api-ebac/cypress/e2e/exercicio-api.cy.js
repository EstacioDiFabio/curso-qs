/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
	let token

	before(() => {
		cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
	});

	it('Deve validar contrato de usuários - CONTRACT', () => {
		cy.request('usuarios').then(response => {
			return contrato.validateAsync(response.body)
		});
	});

	it('Deve listar usuários cadastrados - GET', () => {
		cy.request({
			method: 'GET',
			url: 'usuarios'
		}).then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body).to.have.property('usuarios')
			expect(response.duration).to.be.lessThan(20)
		});
	});

	it('Deve cadastrar um usuário com sucesso - POST', () => {
		let email = `email-${Math.floor(Math.random() * 100)}@teste.com`;

		cy.cadastrarUsuario(
			'Usuario EBAC',
			email,
			'abc123',
			'false'
		).then((response) => {
			expect(response.status).to.equal(201)
			expect(response.body.message).to.equal('Cadastro realizado com sucesso')
		});
	});

	it('Deve validar um usuário com email inválido - POST', () => {
		cy.cadastrarUsuario(
			'Usuario EBAC',
			'fulano@qa.com',
			'abc123',
			'false'
		).then((response) => {
			expect(response.status).to.equal(400)
			expect(response.body.message).to.equal('Este email já está sendo usado')
		});
	});

	it('Deve editar um usuário previamente cadastrado - PUT', () => {
		let email = `email-${Math.floor(Math.random() * 100)}@teste.com`;

		cy.cadastrarUsuario(
			'Usuario EBAC',
			email,
			'abc123',
			'false'
		).then((response) => {
            let id = response.body._id
			let email = `novoemail-${Math.floor(Math.random() * 100)}@teste.com`;

            cy.request({
                method: 'PUT', 
                url: `usuarios/${id}`,
                body: 
                {
					"administrador": 'true',
					"nome": "Usuario ebac editado",
					"password": "abc1234",
					"email": email
				}
            }).then(response => {
                expect(response.body.message).to.equal('Registro alterado com sucesso')
            })
        })
	});

	it('Deve deletar um usuário previamente cadastrado - DELETE', () => {
		let email = `delete-${Math.floor(Math.random() * 100)}@teste.com`;

		cy.cadastrarUsuario(
			'Usuario EBAC',
			email,
			'abc123',
			'false'
		).then((response) => {
            let id = response.body._id
            cy.request({
                method: 'DELETE',
                url: `usuarios/${id}`,
            }).then(response =>{
                expect(response.body.message).to.equal('Registro excluído com sucesso')
                expect(response.status).to.equal(200)
            })
        })
	});
});