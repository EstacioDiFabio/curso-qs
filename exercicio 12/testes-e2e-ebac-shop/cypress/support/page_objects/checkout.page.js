import { faker } from '@faker-js/faker'

class CheckoutPage {
    
    visitarUrl() {
        cy.visit('checkout');
    }

    preencherDados() {
        let dados = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            postalCode: '95012372',
            phone: '919335577',
            email: faker.internet.email()
        };     

        cy.fillCheckout(dados);
        cy.get('#payment_method_cod').click();
        cy.get('#terms').click();
    }

    finalizarPedido() {
        cy.get('#place_order').click();
    }

    checkout() {
        this.visitarUrl();
        this.preencherDados();
        this.finalizarPedido();
    }

    confirm() {
        // Não consigo fazer a verificação se o checkou foi ou não efetivado pois a ação demora bastante para avançar até a próxima página.
        cy.get('.page-title').should('contain', 'PEDIDO RECEBIDO')
    }
}

export default new CheckoutPage();