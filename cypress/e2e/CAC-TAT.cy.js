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

    //cy.get('input[id="firstName"]').type('Jaime',{delay:150})
    cy.get('input[id="firstName"]').type('Jaime')
    cy.get('input[id="firstName"]').should('have.value','Jaime')

    cy.get('input[id="lastName"]').type('Honorato')
    cy.get('input[id="lastName"]').should('have.value','Honorato')

    cy.get('input[id="email"]').type('jaime@uol.com.br')
    cy.get('input[id="email"]').should('have.value','jaime@uol.com.br')
 
    cy.get('#open-text-area').type('teste de texto livre')
    cy.get('#open-text-area').should('have.value','teste de texto livre')

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{

    cy.get('#firstName').type('Jarde')
    cy.get('#firstName').should('have.value','Jarde')

    cy.get('#lastName').type('Honorato')
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jardeuol.com.br')
    cy.get('#email').should('have.value','jardeuol.com.br')
 
    cy.get('#open-text-area').type('teste de validação de email')
    cy.get('#open-text-area').should('have.value','teste de validação de email')

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')    
  })

  it('valida campo telefone, ao digitar algo diferente de numeros o mesmo continua vazio', () =>{

    cy.get('#firstName').type('Jairo')
    cy.get('#firstName').should('have.value','Jairo')

    cy.get('#lastName').type('Honorato')
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jairo@uol.com.br')
    cy.get('#email').should('have.value','jairo@uol.com.br')
 
    cy.get('#phone').type('telefone jairo')
    cy.get('#phone').should('have.value','')

    cy.get('#open-text-area').type('teste de validação do campo telefone em branco')
    cy.get('#open-text-area').should('have.value','teste de validação do campo telefone em branco')

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')    
  }) 

  it('valida campo telefone, ao selecionar o checkbox telefone o campo passa a ser obrigatorio', () =>{

    cy.get('#firstName').type('Jair')
    cy.get('#firstName').should('have.value','Jair')

    cy.get('#lastName').type('Honorato')
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jair@uol.com.br')
    cy.get('#email').should('have.value','jair@uol.com.br')
 
    cy.get('#phone-checkbox').click()

    cy.get('#phone').type('telefone jair')
    cy.get('#phone').should('have.value','')

    cy.get('#open-text-area').type('teste de validação do campo telefone obrigatorio')
    cy.get('#open-text-area').should('have.value','teste de validação do campo telefone obrigatorio')

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')    
  }) 
  
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () =>{

    cy.get('#firstName').type('Jaime')
    cy.get('#firstName').should('have.value','Jaime')

    cy.get('#lastName').type('Honorato')
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jaime@uol.com.br')
    cy.get('#email').should('have.value','jaime@uol.com.br')
 
    cy.get('#phone').type('11964200039')
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

  it('marca cada tipo de atendimento - prof', () => {

    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
        .check()
        .should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {

    cy.get('input[type="checkbox"]')
      .first().check()
      .should('be.checked')
    cy.get('input[type="checkbox"]')
      .last().check()
      .should('be.checked')
      .last().uncheck()
      .should('not.be.checked')

  })

  it('marca ambos checkboxes, depois desmarca o último, versão do professor', () => {

    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

    it('re-valida campo telefone, ao selecionar o checkbox telefone ".check()" o campo passa a ser obrigatorio', () =>{

    cy.get('#firstName').type('Jaime')
    cy.get('#firstName').should('have.value','Jaime')

    cy.get('#lastName').type('Honorato')
    cy.get('#lastName').should('have.value','Honorato')

    cy.get('#email').type('jaime@uol.com.br')
    cy.get('#email').should('have.value','jaime@uol.com.br')
 
    cy.get('#phone-checkbox')
      .check()
      .should('be.checked')

    cy.get('#phone').type('telefone jaime')
    cy.get('#phone').should('have.value','')

    cy.get('#open-text-area').type('teste de validação do campo telefone obrigatorio, utilizando comando .check()')
    cy.get('#open-text-area').should('have.value','teste de validação do campo telefone obrigatorio, utilizando comando .check()')

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')    
  })

  it('seleciona um arquivo da pasta fixtures', () => {

    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
   
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json',{ action: 'drag-drop'})
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    
    cy.fixture('example.json').as('sampleFile')

    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })


  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    
    cy.get('#privacy a').should('have.attr', 'target', '_blank')

  })

  it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {

    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()
    
  })

  it("testa a página da política de privacidade de forma independente", () => {
    
    cy.get("#privacy a")
      .invoke('removeAttr', 'target')
      .click()

    cy.get('#title')
      .should('have.text', 'CAC TAT - Política de Privacidade')
  })

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique, prof ver.", () =>{

    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it("acessa a página da política de privacidade removendo o target e então clicando no link, prof ver.", () => {

    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')
  })
// o teste na realidade pede para testar a página sem a necessidade de um clique, chamando direto "'privacy.html"
  it("testa a página da política de privacidade de forma independente, prof ver.", () => {

    cy.visit('./src/privacy.html')

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')

    cy.contains('p', 'Talking About Testing')
      .should('be.visible')
  })
  // Lição 12 - Avançando no uso do Cypress - Controle o Relógio " cy.clock() e cy.tick()"
  it("controla o relógio, .success deve aparecer e desaparecer", () => {
    
    cy.clock() //congela o relógio 
    cy.get('input[id="firstName"]').type('Jaime')
    cy.get('input[id="firstName"]').should('have.value','Jaime')

    cy.get('input[id="lastName"]').type('Honorato')
    cy.get('input[id="lastName"]').should('have.value','Honorato')

    cy.get('input[id="email"]').type('jaime@uol.com.br')
    cy.get('input[id="email"]').should('have.value','jaime@uol.com.br')
 
    cy.get('#open-text-area').type('teste de texto livre')
    cy.get('#open-text-area').should('have.value','teste de texto livre')
    
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')

    cy.tick(3000) // avança o relógio em 3 segundos
    cy.get('.success').should('not.be.visible') 

  })

  it("controla o relógio, .error deve aparecer e desaparecer", () => {
    
    cy.clock() //congela o relógio 
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible') 

    cy.tick(3000) // avança o relógio em 3 segundos
    cy.get('.error').should('not.be.visible') 
    
  })

  it("exibe e oculta as mensagens de sucesso e erro usando .invoke()", () => {

    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')


    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
      
  })

  it("preenche o campo da area de texto usando o comando .invoke()", () => {

    cy.get('#open-text-area')
    .invoke('val', 'Um texto qualquer')
    .should('have.value', 'Um texto qualquer')

  })

  it("Faz uma requisição HTTP, cy.request()", () => {

    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
    .as('getRequest')
    .its('status')
    .should('be.equal', 200)

    cy.get('@getRequest')
      .its('statusText')
      .should('be.equal', 'OK')
      
    cy.get('@getRequest')
      .its('body')
      .should('include', 'CAC TAT')

  })

  it("Encontra o gato e verifica que o mesmo está visível", () => {

    cy.visit('src/index.html')

    cy.get("#cat")
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')

    cy.get('#title')
    .invoke("text", "CAT TAT")

})

})