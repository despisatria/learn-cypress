/// <reference types="cypress" />

describe('Saucedemo Test', function() {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })
 
    it('Try to Login with invalid data', () => {
        cy.get('#login_button_container').should('be.visible')
        cy.get('#user-name').type('invalid username')
        cy.get('#password').type('invalid password')
        cy.get('#login-button').click()
    });
 
    it('Should display error message', () => {
        cy.get('.error-message-container').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    });
 
    it('Should login to application with valid data', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
 
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)  
 
            cy.get('#password').clear()
            cy.get('#password').type(password)
 
            cy.get('#login-button').click()
 
            cy.get('.title').should('be.visible').and('contain.text', 'Products')
        })
    });
 
    it('Try to choose Product', () => {
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-bike-light").click()
        cy.get(".shopping_cart_link").click()    
    });  
 
    it('Checkout Product', () => {
        cy.get("#checkout").click()
    });
 
    it('Input customer information', () => {
        cy.get('#first-name').clear()
        cy.get('#first-name').type('John')  
       
        cy.get('#last-name').clear()
        cy.get('#last-name').type('Doe')
 
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type('123456')
 
        cy.get('#continue').click()  
    });
 
    it('Checkout Products', () => {
        cy.get("#finish").click()
    });
 
    it('Logout from the web', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('#user-name').should('be.visible')
    });
 
});
