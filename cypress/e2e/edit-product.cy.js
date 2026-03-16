
describe('Editar Produto', () => {

it('edita produto', () => {

cy.visit('http://localhost:5173')

cy.get('[data-testid="create-product-button"]').click()

cy.get('[data-testid="product-name-input"]').type('Mouse')

cy.get('[data-testid="product-price-input"]').type('100')

cy.get('[data-testid="product-category-input"]').type('Perifericos')

cy.get('[data-testid="save-product-button"]').click()

cy.get('[data-testid="edit-product-button"]').first().click()

cy.get('[data-testid="product-name-input"]').clear().type('Mouse Gamer')

cy.get('[data-testid="save-product-button"]').click()

cy.contains('Mouse Gamer')

})

})
