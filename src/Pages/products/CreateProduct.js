import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import ProductForm from "./ProductForm";
import { createProduct } from "../../Redux/Actions/productAction";
// import ProductForms from "../../Components/Form/ProductForms";
import "./product.css";

const productData = {
  title: "",
  description: "",
  price: "",
  stock: "",
  image_url: "",
  category: "",
  brand: "",
  // discountPercentage: "",
};
function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const submitProductData = (e) => {
    e.preventDefault();
    dispatch(createProduct({ ...product }));
    console.log(product);
    navigate("/products");
  };

  const cancelForm = () => {
    setProduct(productData);
    navigate("/products"); // Redirect to the product list page
  };
  return (
    <section className="create_product">
      <form onSubmit={submitProductData} className="product_form">
        <div className="product_name">
          <label htmlFor="title">Product Title</label>
          <input
            id="title"
            placeholder="Product title"
            name="title"
            required
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
            required
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
                required
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
                required
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
                required
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
                required
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
            required
            name="image_url"
            value={product.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="product_submit_btn">
          <button type="submit" className="save">
            Save
          </button>
          <button type="button" onClick={cancelForm} className="cancle">
            Cancle
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateProduct;
