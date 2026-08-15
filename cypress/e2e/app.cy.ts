describe('App', () => {
  it('loads the app', () => {
    cy.visit('/')
    cy.contains('Trading Activity').should('be.visible')
  })
})
