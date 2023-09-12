import React, { useState } from "react";
import "./productForms.css";

function ProductForms({ productData, submitData }) {
  const [product, setProduct] = useState(productData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const productHandler = (e) => {
    e.preventDefault();
    // Implement your submit logic here
    console.log(product);
    submitData(product);
  };

  return (
    <form onSubmit={productHandler} className="product_form">
      <div className="product_name">
        <label htmlFor="title">Product Title</label>
        <input
          id="title"
          placeholder="Product title"
          name="title"
          value={product.title}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="product_description">
        <label htmlFor="description">Product Description</label>
        <textarea
          id="description"
          placeholder="Product description"
          name="description"
          value={product.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="product_stoke_price">
        <div className="stock_and_price">
          <div className="stock">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              placeholder="Stock"
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
            />
          </div>
          <div className="price">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              placeholder="Price"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="brand_and_category">
          <div className="brand">
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              placeholder="Brand"
              name="brand"
              type="text"
              value={product.brand}
              onChange={handleChange}
            />
          </div>
          <div className="category">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              placeholder="Category"
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="product_image">
        <label htmlFor="image_url">Image URL</label>
        <input
          id="image_url"
          placeholder="Image URL"
          type="url"
          name="image_url"
          value={product.image_url}
          onChange={handleChange}
        />
      </div>
      <div className="product_submit_btn">
        <button onClick={() => submitData(product)}>Save</button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default ProductForms;
