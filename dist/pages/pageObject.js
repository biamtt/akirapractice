"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageObject = void 0;
class PageObject {
    /// <reference types="cypress" />
    //To visit url
    visit(url) {
        cy.visit(url);
    }
    //get SignIn button
    getSignInButton() {
        return cy.get('a[href="/id/login"]');
    }
    //to press the SignIn button
    clickSignInButton() {
        this.getSignInButton()
            .should('exist')
            .and('be.visible')
            .click();
    }
    //get UsernameEmail input
    getUsernameEmailInput() {
        return cy.get('input[name="username"]');
    }
    //to enter Username/Email data
    enterUsernameEmailInput(username) {
        this.getUsernameEmailInput()
            .should('exist')
            .and('be.visible')
            .type(username);
    }
    //to get Password input
    getPasswordInput() {
        return cy.get('input[name="password"]');
    }
    //to enter Password data
    enterPasswordInput(password) {
        this.getPasswordInput()
            .should('exist')
            .and('be.visible')
            .type(password);
    }
    //to press SignIn button to log in
    pressSignInToLogInButton() {
        cy.contains('button', 'Sign In')
            .click();
    }
}
exports.PageObject = PageObject;
