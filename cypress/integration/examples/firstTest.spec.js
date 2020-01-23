context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')

    })
    it('.root - type into a DOM element', () => {
    cy.get('.form-control')
    .type('lille')
    .should(($p)=> expect($p).to.have.length(1));

    })

});