import React from "react";

function ProductList({ products, onEdit, onDelete }) {

  return (
    <div className="table-wrapper">

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

          {products.length > 0 ? (
            products.map((product) => (

              <tr key={product.id}>

                <td data-testid="product-name">
                  {product.name}
                </td>

                <td data-testid="product-price">
                  {product.price}
                </td>

                <td data-testid="product-category">
                  {product.category}
                </td>

                <td>

                  <button
                    className="action-btn edit-btn"
                    data-testid="edit-product-button"
                    onClick={() => onEdit(product)}
                  >
                    Editar
                  </button>

                  <button
                    className="action-btn delete-btn"
                    data-testid="delete-product-button"
                    onClick={() => onDelete(product.id)}
                  >
                    Excluir
                  </button>

                </td>

              </tr>

            ))
          ) : (

            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Nenhum produto cadastrado
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default ProductList;