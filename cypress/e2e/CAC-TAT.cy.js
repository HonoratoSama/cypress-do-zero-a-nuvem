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
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{

    cy.get('#firstName').type('Jarde',{delay:150})
    cy.get('#firstName').should('have.value','Jarde')

    cy.get('#lastName').type('Honorato',{delay:150})
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jardeuol.com.br',{delay:150})
    cy.get('#email').should('have.value','jardeuol.com.br')
 
    cy.get('#open-text-area').type('teste de validação de email',{delay:150})
    cy.get('#open-text-area').should('have.value','teste de validação de email')

    cy.get('button').click()

    cy.get('.error').should('be.visible')    
  })

    it('valida campo telefone, ao digitar algo diferente de numeros o mesmo continua vazio', () =>{

    cy.get('#firstName').type('Jairo',{delay:150})
    cy.get('#firstName').should('have.value','Jairo')

    cy.get('#lastName').type('Honorato',{delay:150})
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jairo@uol.com.br',{delay:150})
    cy.get('#email').should('have.value','jairo@uol.com.br')
 
    cy.get('#phone').type('telefone jairo', {delay:100})
    cy.get('#phone').should('have.value','')

    cy.get('#open-text-area').type('teste de validação do campo telefone em branco',{delay:150})
    cy.get('#open-text-area').should('have.value','teste de validação do campo telefone em branco')

    cy.get('button').click()

    cy.get('.success').should('be.visible')    
  }) 

  it('valida campo telefone, ao selecionar o checkbox telefone o campo passa a ser obrigatorio', () =>{

    cy.get('#firstName').type('Jair',{delay:150})
    cy.get('#firstName').should('have.value','Jair')

    cy.get('#lastName').type('Honorato',{delay:150})
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jair@uol.com.br',{delay:150})
    cy.get('#email').should('have.value','jair@uol.com.br')
 
    cy.get('#phone-checkbox').check()

    cy.get('#phone').type('telefone jair', {delay:150})
    cy.get('#phone').should('have.value','')

    cy.get('#open-text-area').type('teste de validação do campo telefone obrigatorio',{delay:150})
    cy.get('#open-text-area').should('have.value','teste de validação do campo telefone obrigatorio')

    cy.get('button').click()

    cy.get('.error').should('be.visible')    
  }) 
  
    it('preenche e limpa os campos nome, sobrenome, email e telefone', () =>{

    cy.get('#firstName').type('Jaime',{delay:150})
    cy.get('#firstName').should('have.value','Jaime')

    cy.get('#lastName').type('Honorato',{delay:150})
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jaime@uol.com.br',{delay:150})
    cy.get('#email').should('have.value','jaime@uol.com.br')
 
    cy.get('#phone').type('11964200039', {delay:150})
    cy.get('#phone').should('have.value','11964200039')

    cy.get('#firstName').clear()
    cy.get('#firstName').should('have.value','')

    cy.get('#lastName').clear()
    cy.get('#lastName').should('have.value','')

    cy.get('#email').clear()
    cy.get('#email').should('have.value','')
 
    cy.get('#phone').clear()
    cy.get('#phone').should('have.value','')    

  }) 

      it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{

    cy.get('button').click()

    cy.get('.error').should('be.visible')      

  })
})