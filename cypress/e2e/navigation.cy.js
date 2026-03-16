
describe('Menu', () => {

it('navega entre paginas', () => {

cy.visit('http://localhost:5173')

cy.get('[data-testid="menu-about"]').click()

cy.contains('Sobre')

cy.get('[data-testid="menu-products"]').click()

cy.contains('Produtos')

})

})
