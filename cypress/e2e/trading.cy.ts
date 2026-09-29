describe('Trading page', () => {
  beforeEach(() => {
    cy.visit('/trading')
  })

  it('shows the order overview heading', () => {
    cy.contains('h1', 'Order Overview').should('be.visible')
  })

  it('renders the recent orders table with headers', () => {
    ;['Order ID', 'Customer', 'Symbol', 'Status', 'Amount', 'Date'].forEach((heading) => {
      cy.contains('thead th', heading).should('be.visible')
    })
  })

  it('lists the expected orders', () => {
    cy.contains('tbody tr', '#1042').within(() => {
      cy.contains('Ava Thompson')
      cy.contains('AAPL')
      cy.contains('Filled')
      cy.contains('$2,480')
      cy.contains('2026-08-15')
    })

    cy.get('tbody tr').should('have.length', 4)
  })

  it('navigates to other pages via the nav bar', () => {
    cy.get('nav').contains('Home').click()
    cy.location('pathname').should('eq', '/')

    cy.visit('/trading')
    cy.get('nav').contains('About').click()
    cy.location('pathname').should('eq', '/about')
  })
})
