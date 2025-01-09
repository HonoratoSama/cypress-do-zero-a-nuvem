Cypress.Commands.add('fillMandatoryFieldsAndSubmitConst', (data = {
    firstName: 'John',
    lastName:  'Doe',
    email:     'JohnDoe@example.com',
    phone:     '11923456789',
    text:      'utilizando comandos personalizados com uma constante com um valor padrão informado no arquivo commands.js'
}) => {

    cy.get('#firstName').type(data.firstName)
    
    cy.get('#lastName').type(data.lastName)
    
    cy.get('#email').type(data.email)
     
    cy.get('#phone').type(data.phone)
    
    cy.get('#open-text-area').type(data.text)
    
    cy.get('button[type="submit"]').click()

})