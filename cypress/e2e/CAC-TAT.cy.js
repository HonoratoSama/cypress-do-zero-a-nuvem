beforeEach(() =>{
  cy.visit('src/index.html')
})
describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
})
describe('Digitando em campos e clicando em elementos', () =>{
  it('Preencher campos obrigatórios e clicar no botão ok', () =>{

    cy.get('input[id="firstName"]').type('Jaime',{delay:150})
    cy.get('input[id="firstName"]').should('have.value','Jaime')

    cy.get('input[id="lastName"]').type('Honorato',{delay:150})
    cy.get('input[id="lastName"]').should('have.value','Honorato')

    cy.get('input[id="email"]').type('jaime@uol.com.br',{delay:150})
    cy.get('input[id="email"]').should('have.value','jaime@uol.com.br')
 
    cy.get('#open-text-area').type('teste de texto livre',{delay:150})
    cy.get('#open-text-area').should('have.value','teste de texto livre')

    cy.get('button').click()

    cy.get('.success').should('be.visible')
  
  })
})