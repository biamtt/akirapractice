// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// /// <reference types="cypress" />

describe('User log in to Sportsbet', () => {
    let credentials;

    before(() => {
        cy.fixture('testdata').then((data) => {
            credentials = data;
        });
    });

    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('&')) {
            return false;
        }
        return true;
    });

    it('Should access sportsbet main page and go to sign in to login', () => {
        cy.login(credentials.username, credentials.password);
    });
});