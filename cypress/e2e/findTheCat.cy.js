  it("Encontra o gato e verifica que o mesmo está visível", () => {

    cy.visit('src/index.html')

    cy.get("#cat")
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')

    cy.get('#title')
    .invoke("text", "CAT TAT")

    cy.get("#cat")
    .should('be.visible')
    .invoke('hide')
    .should('not.be.visible')

    cy.get('#title')
    .invoke('text', 'CAC TAT')    

})