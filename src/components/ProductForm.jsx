import React, { useState, useEffect } from 'react';

function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState({ name: '', price: '', category: '' });

  useEffect(() => {
    if (product && product.id) {
      setFormData(product);
    } else {
      setFormData({ name: '', price: '', category: '' });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: '', price: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">

      <input
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        data-testid="product-name-input"
        required
      />

      <input
        type="text"
        placeholder="Preço"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        data-testid="product-price-input"
        required
      />

      <input
        type="text"
        placeholder="Categoria"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        data-testid="product-category-input"
        required
      />

      <button
  type="submit"
  className="save-btn"
  data-testid="save-product-button"
>
  Salvar
</button>

      {product?.id && (
        <button
          type="button"
          onClick={onCancel}
          className="cancel-btn"
        >
          Cancelar Edição
        </button>
      )}

    </form>
  );
}

export default ProductForm;