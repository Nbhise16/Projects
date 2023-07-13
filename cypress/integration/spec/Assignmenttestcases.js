//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions

describe('CustomSuite', function () {
    it('Logintest-FirstTestCase', function () {
        
        cy.visit('https://automationteststore.com/');
       
        cy.contains('Login or register').click({ force: true });
        cy.get('#loginFrm_loginname').type('Nbhise');
        cy.get('#loginFrm_password').type('test123');
        cy.contains('Login').click();
        //cy.xpath("//input[@id='loginFrm_loginname']").type('Nbhise');
        //cy.xpath("//input[@type='password']").type('Test_12345');
        //cy.get('button[title="Login"]').click();
        cy.get('.pull-right').eq(1).click({ force: true });
        
    })
})