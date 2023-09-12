import React, { useEffect, useState } from "react";
// import ProductForm from "./ProductForm";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteProduct,
  productById,
  updateProduct,
} from "../../Redux/Actions/productAction";
import Loading from "../../Components/Loading/Loading";

function UpdateProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({ ...product });

  console.log(productData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(productById(productId));
  }, [dispatch, productId]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productData, productId));
    navigate(-1);
  };

  const deleteProductData = () => {
    dispatch(deleteProduct(productId));
    navigate(-1);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="create_product">
      <form onSubmit={handleUpdateProduct} className="product_form">
        <div className="product_name">
          <label htmlFor="title">Product Title</label>
          <input
            id="title"
            placeholder="Product title"
            name="title"
            required
            value={productData?.title}
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
            value={productData?.description}
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
                value={productData?.stock}
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
                value={productData?.price}
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
                value={productData?.brand}
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
                value={productData?.category}
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
            value={productData?.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="product_submit_btn">
          <button type="submit" className="save">
            Save
          </button>
          <button type="button" onClick={deleteProductData} className="cancle">
            Delete
          </button>
        </div>
      </form>
    </section>
  );
}

export default UpdateProduct;
