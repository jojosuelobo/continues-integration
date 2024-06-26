describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('comandos').should('be.visible')
  })
})