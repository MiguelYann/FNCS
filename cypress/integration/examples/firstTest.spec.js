context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')

    })
    it('Verifie que la recherche avec lille passe', () => {
    cy.get('.form-control')
    .type('lille')
    .should(($p)=> expect($p).to.have.length(1));

    })

});
