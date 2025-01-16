"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageObject = void 0;
class PageObject {
    constructor() {
        //Sign in button
        this.signInButton = 'button__Button-sc-6uigdf-2 cXPrDW';
        //Sign up button
        this.signUpButton = 'sc-kXLzTl iJlZSA';
        //Username input
        this.usernameOrEmailInput = 'input[name="username"]';
        //Password input
        this.passwordInput = 'input[name="password"]';
        //Username after logged in
        this.loggedInUsername = '[data-testid="username"]';
    }
    //To visit url
    visit(url) {
        cy.visit(url);
    }
    //To fill the username
    enterUsernameOrEmail(username) {
        cy.get(this.usernameOrEmailInput).click().type(username);
    }
    //To fill the password
    enterPassword(password) {
        cy.get(this.passwordInput).click().type(password);
    }
    //To press the Sign In button
    clickSignInButton() {
        cy.get(this.signInButton).click();
    }
    //To press the Sign Up button
    clickSignUpButton() {
        cy.get(this.signUpButton).click();
    }
    //To check username after logged in
    verifyUsername(expectedUsername) {
        cy.get(this.loggedInUsername, { timeout: 1000 })
            .should('be.visible')
            .and('have.text', expectedUsername);
    }
}
exports.PageObject = PageObject;
