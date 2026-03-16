
describe('Criar Produto', () => {

it('cria produto', () => {

cy.visit('http://localhost:5173')

cy.get('[data-testid="create-product-button"]').click()

cy.get('[data-testid="product-name-input"]').type('Notebook')

cy.get('[data-testid="product-price-input"]').type('5000')

cy.get('[data-testid="product-category-input"]').type('Eletronicos')

cy.get('[data-testid="save-product-button"]').click()

cy.contains('Notebook')

})

})
