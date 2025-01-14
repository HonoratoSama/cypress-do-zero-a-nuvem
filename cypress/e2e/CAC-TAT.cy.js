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

    cy.get('button[type="submit"]').click()

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

    cy.get('button[type="submit"]').click()

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

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')    
  }) 

  it('valida campo telefone, ao selecionar o checkbox telefone o campo passa a ser obrigatorio', () =>{

    cy.get('#firstName').type('Jair',{delay:150})
    cy.get('#firstName').should('have.value','Jair')

    cy.get('#lastName').type('Honorato',{delay:150})
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jair@uol.com.br',{delay:150})
    cy.get('#email').should('have.value','jair@uol.com.br')
 
    cy.get('#phone-checkbox').click()

    cy.get('#phone').type('telefone jair', {delay:150})
    cy.get('#phone').should('have.value','')

    cy.get('#open-text-area').type('teste de validação do campo telefone obrigatorio',{delay:150})
    cy.get('#open-text-area').should('have.value','teste de validação do campo telefone obrigatorio')

    cy.get('button[type="submit"]').click()

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

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })

  // aqui segue a 1a versão do 7o exercicio extra, onde serão utilizados "Comandos Personalizados"
  it('envia o formulário com sucesso usando um comando customizado', () =>{
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

   // aqui segue a 2a versão do 7o exercicio extra, onde serão utilizados "Comandos Personalizados"
   it('envia o formulário com sucesso usando um comando customizado, usando variáveis', () => {

    const data = {
      firstName: 'Jaime',
      lastName:  'Honorato',
      email:     'jaime@gmail.com',
      phone:     '11964200039',
      text:      'Utilizando uma constante como parâmetro'
    }

    cy.fillMandatoryFieldsAndSubmitConst(data)

    cy.get('.success').should('be.visible')
   })

   // aqui segue a 3a versão do 7o exercicio extra, onde serão utilizados "Comandos Personalizados"
   
 
  it('envia o formulário com sucesso usando um comando customizado, usando variáveis', () => {

    cy.fillMandatoryFieldsAndSubmitConst()

    cy.get('.success').should('be.visible')
   })

   //aqui estamos utilizando as TAGs do HTML para interagir com os itens, neste cado a TAG Button
  it('utilizaqndo o comando ".contains"', () =>{

    cy.contains('button','Enviar').click()

    cy.get('.error').should('be.visible')    
  })
  // Lição 3 - Selecionando opções em campos de seleção suspensa
  it('seleciona um produto (YouTube) por seu texto', () => {

    cy.get('#product')
      .select('YouTube')
      .should('have.value','youtube')

  })
  
 it('seleciona um produto (Mentoria) por seu valor (value)', () => {

    cy.get('#product')
      .select('mentoria')
      .should('have.value','mentoria')
    
    })

  it('seleciona um produto (Blog) por seu índice', () => {

    cy.get('#product')
      .select(1)
      .should('have.value','blog')

  })

  // Lição 4 - Marcando entradas do tiporadio
  it('marca o tipo de atendimento "Feedback"', () => {

    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })

  it('marca o tipo de atendimento "Elogio"', () => {

    cy.get('input[type="radio"][value="elogio"]')
      .check()
      .should('be.checked')
  })

  it('marca o tipo de atendimento "Ajuda"', () => {

    cy.get('input[type="radio"][value="ajuda"]')
      .check()
      .should('be.checked')
  })

  it('marca cada tipo de atendimento', () => {

    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
    
    cy.get('input[type="radio"][value="ajuda"]')
      .check()
      .should('be.checked')

    cy.get('input[type="radio"][value="elogio"]')
      .check()
      .should('be.checked')
  })

  //resolução do exercício extra feito pelo professor 

  it.only('marca cada tipo de atendimento - prof', () => {

    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
        .check()
        .should('be.checked')
      })
  })

})