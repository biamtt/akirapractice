"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="cypress" />

describe('Username validation', () => {
    const username = "testbianca";
    const password = "Akira@2024";

    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('&')) {
            return false;
        }
        return true;
    });
    it('should access sportsbet, go to login page and proceed till logged in and check the username', () => {
        cy.login(username, password);
    });
});
