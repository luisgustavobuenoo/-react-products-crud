
describe('Excluir Produto', () => {

it('remove produto', () => {

cy.visit('http://localhost:5173')

cy.get('[data-testid="create-product-button"]').click()

cy.get('[data-testid="product-name-input"]').type('Teclado')

cy.get('[data-testid="product-price-input"]').type('200')

cy.get('[data-testid="product-category-input"]').type('Perifericos')

cy.get('[data-testid="save-product-button"]').click()

cy.get('[data-testid="delete-product-button"]').first().click()

})

})
