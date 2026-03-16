function ProductList({ products, onEdit, onDelete, onCreate }) {

  return (
    <div className="container">

      <button
        className="create-btn"
        data-testid="create-product-button"
        onClick={onCreate}
      >
        Criar Produto
      </button>

      <table>

        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>

          {products.map(product => (

            <tr key={product.id} data-testid="product-row">

              <td>{product.name}</td>
              <td>R$ {product.price}</td>
              <td>{product.category}</td>

              <td>

                <button
                  className="edit-btn"
                  data-testid="edit-product-button"
                  onClick={() => onEdit(product)}
                >
                  Editar
                </button>

                {" "}

                <button
                  className="delete-btn"
                  data-testid="delete-product-button"
                  onClick={() => onDelete(product.id)}
                >
                  Excluir
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default ProductList