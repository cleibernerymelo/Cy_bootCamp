///<reference types="cypress"/>

let Chance = require('chance');
let chance = new Chance();

describe('Utilizadores', () => {
    it('criar novo utilizador', () => {
        cy.visit('/index.php');
       // cy.get('.login').click()
        cy.get('a[class="login"]').click({ multiple: true });
        cy.get('input[id="email_create"]').type(chance.email());
        cy.get('button[id="SubmitCreate"]').click();
        cy.get('input[id="id_gender1"]').click();
        cy.get('input[id="customer_firstname"]').type(chance.first());
        cy.get('input[id="customer_lastname"]').type(chance.last());
        cy.get('input[id="passwd"]').type('Portug@5');
        cy.get('input[id="firstname"]').type(chance.first());
        cy.get('input[id="lastname"]').type(chance.last());
        cy.get('input[id="address1"]').type('Rua da saudade');
        cy.get('input[id="city"]').type('Aparecida de Goiania');
        cy.get('select[id="id_state"]').select('1');
        cy.get('input[id="postcode"]').type('12345');
        cy.get('select[id="id_country"]').type('21');
        cy.get('input[id="phone_mobile"]').type(chance.phone());
        cy.get('input[id="alias"]').clear();
        cy.get('input[id="alias"]').type(chance.email());
        cy.get('button[id="submitAccount"]').click()
        cy.get('p[class="info-account"]').should('contain', 'Welcome to your account.')
    });
});