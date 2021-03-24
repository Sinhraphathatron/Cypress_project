/// <reference types="Cypress" />

context('Todos', function () {
    it('should show #main', function () {
        cy.get('.main').should('be.visible')
        cy.contains('Hello')
    })
})

WebGLProgram 