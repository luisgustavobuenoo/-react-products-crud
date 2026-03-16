import { useState } from "react"
import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"
import "../style.css";

function Products() {

  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  function saveProduct(product) {
    if (product.id) {
      setProducts(
        products.map(p =>
          p.id === product.id ? product : p
        )
      )
    } else {
      product.id = Date.now()
      setProducts([...products, product])
    }
    setEditingProduct(null)
  }

  function deleteProduct(id) {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="container">

      <main className="main-card">

        <header className="card-header">
          <h1>Produtos</h1>
          <p>Cadastre, edite e remova itens da sua lista.</p>
        </header>

        <div className="content-grid">

          {/* FORMULÁRIO */}
          <section className="form-section">

            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>

              <h2>
                {editingProduct?.id ? "Editar produto" : "Novo produto"}
              </h2>

              <button
  className="create-btn"
  data-testid="create-product-button"
  onClick={() => setEditingProduct({})}
>
  Novo Produto
</button>

            </div>

            <ProductForm
              product={editingProduct || {}}
              onSave={saveProduct}
              onCancel={() => setEditingProduct(null)}
            />

          </section>

          {/* LISTA */}
          <section className="table-section">

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2>Lista de produtos</h2>
              <span className="items-badge">
                {products.length} item(ns)
              </span>
            </div>

            <ProductList
              products={products}
              onEdit={setEditingProduct}
              onDelete={deleteProduct}
            />

          </section>

        </div>

      </main>

    </div>
  )
}

export default Products