describe ('Pruebas Udemy',() =>{
    beforeEach(() => {
         cy.visit('https://learn.microsoft.com/es-es/azure/devops/test/repeat-test-with-different-data?view=azure-devops');
      })
   it('prueba cursos',() =>{
   cy.get('#email-form-name').should('have.class', 'sc-iwXfZk fzASgQ')
    
    })
    it('prueba cursos',() =>{
        cy.get('.sc-ghWlax.sc-hbtGpV.iPmxPo.imiHgn').should('have.text','DESTACÁ TU PERFIL EN TESTING, EMPEZÁ HOY')
         
         })
         it('prueba cursos',() =>{
            cy.get('.sc-epnzzT.oORQE').should('be.visible')
             
             })
    
  
});