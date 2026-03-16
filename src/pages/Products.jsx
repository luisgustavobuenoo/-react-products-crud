import { useState } from "react"
import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"

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

      <h1 style={{marginBottom:20}}>
        Gerenciamento de Produtos
      </h1>

      {editingProduct !== null ? (

        <ProductForm
          product={editingProduct}
          onSave={saveProduct}
          onCancel={() => setEditingProduct(null)}
        />

      ) : (

        <ProductList
          products={products}
          onEdit={setEditingProduct}
          onDelete={deleteProduct}
          onCreate={() => setEditingProduct({})}
        />

      )}

    </div>
  )
}

export default Products