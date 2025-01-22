export class PageObject {
/// <reference types="cypress" />

    private signInButton = 'a[href="/id/login"]';
    private usernameEmailInput = 'input[name="username"]';
    private passwordInput = 'input[name="password"]';
    //private signInToLoginButton = '//*[@id="__next"]/div[2]/div/main/div/div[2]/form/button[2]';

    //To visit url
    visit(url: string) {
        cy.visit(url);
    }

    //get SignIn button
    getSignInButton() {
        return cy.get(this.signInButton);
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
        return cy.get(this.usernameEmailInput);
    }

    //to enter Username/Email data
    enterUsernameEmailInput(username: string) {
        this.getUsernameEmailInput()
            .should('exist')
            .and('be.visible')
            .type(username);
    }

    //to get Password input
    getPasswordInput() {
        return cy.get(this.passwordInput);
    }

    //to enter Password data
    enterPasswordInput(password: string) {
        this.getPasswordInput()
        .should('exist')
        .and('be.visible')
        .type(password);
    }

    //to press SignIn button to log in
    pressSignInToLogInButton() {
        cy.xpath('//*[@id="__next"]/div[2]/div/main/div/div[2]/form/button[2]').click();
    }

}