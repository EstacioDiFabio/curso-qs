

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('fillCheckout', (dados) => {
    cy.get('#billing_first_name').type(dados.firstName);
    cy.get('#billing_last_name').type(dados.lastName);
    cy.get('#billing_address_1').type(dados.address);
    cy.get('#billing_city').type(dados.city);
    cy.get('#billing_postcode').type(dados.postalCode);
    cy.get('#billing_phone').type(dados.phone);
    cy.get('#billing_email').type(dados.email);
});