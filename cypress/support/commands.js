Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

    cy.get('#firstName').type('Jaime')
    cy.get('#firstName').should('have.value','Jaime')

    cy.get('#lastName').type('Honorato')
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jaime@gmail.com')
    cy.get('#email').should('have.value','jaime@gmail.com')
 
    cy.get('#phone').type('11964200039')
    cy.get('#phone').should('have.value','11964200039')

    cy.get('#open-text-area').type('teste de comandos personalizados')
    cy.get('#open-text-area').should('have.value','teste de comandos personalizados')    

    cy.get('button[type="submit"]').click()

})