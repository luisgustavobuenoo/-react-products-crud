import { useState } from "react"

function ProductForm({ product, onSave, onCancel }) {

  const [name, setName] = useState(product.name || "")
  const [price, setPrice] = useState(product.price || "")
  const [category, setCategory] = useState(product.category || "")

  function handleSubmit(e) {
    e.preventDefault()

    onSave({
      ...product,
      name,
      price,
      category
    })
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>

        <h2 style={{marginBottom:20}}>Produto</h2>

        <input
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="product-name-input"
        />

        <input
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          data-testid="product-price-input"
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="product-category-input"
        />

        <div style={{marginTop:10}}>

          <button
            className="create-btn"
            data-testid="save-product-button"
            type="submit"
          >
            Salvar
          </button>

          {" "}

          <button
            className="delete-btn"
            data-testid="cancel-product-button"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>

        </div>

      </form>

    </div>
  )
}

export default ProductForm