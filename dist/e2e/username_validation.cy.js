"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pageObject_1 = require("../pages/pageObject");
// <reference types="cypress" />
describe('Username validation', () => {
    const pageObject = new pageObject_1.PageObject();
    const url = 'https://staging.sportsbet.io/id/login';
    it('should access sportsbet, go to login page and proceed till logged in and check the username', () => {
        pageObject.visit(url);
        pageObject.enterUsernameOrEmail('biancamoretto_test');
        pageObject.enterPassword('Akira@2024');
        pageObject.clickSignInButton();
        pageObject.verifyUsername('biancamoretto_test');
    });
});
