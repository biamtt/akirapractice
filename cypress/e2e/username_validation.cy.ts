import {PageObject} from '../pages/pageObject';
/// <reference types="cypress" />

describe('Username validation', () => {
    const pageObject = new PageObject();
    const url = "https://staging.sportsbet.io/";
    const username = "testbianca";
    const password = "Akira@2024";

    Cypress.on('uncaught:exception', (err: { message: string; }) => {
        if(err.message.includes('&')) {
            return false;
        }
        return true;
    });


    it('should access sportsbet, go to login page and proceed till logged in and check the username', () => {
        pageObject.visit(url);
        pageObject.clickSignInButton();
        pageObject.enterUsernameEmailInput(username);
        pageObject.enterPasswordInput(password);
        pageObject.pressSignInToLogInButton();

    });
})