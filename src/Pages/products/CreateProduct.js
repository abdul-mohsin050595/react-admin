import React from 'react';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import ProductForm from './ProductForm';
import { createProduct } from '../../Redux/Actions/productAction';


const productData = {
  title: "",
  description: "",
  price: "",
  stock: "",
  image_url: "",
  category: "",
  brand: "",
  discountPercentage: ""
}
function CreateProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitProductData = (product) => {
    const {title,description,price,stock,image_url,category,brand ,discountPercentage} = product
    dispatch(createProduct({
      title,description,price,stock,image_url,category,brand,discountPercentage,rating : ""
    }))
    navigate("/products")
  }

  return (
    <section className='create_product'>
      <ProductForm productData={productData} submitData={submitProductData} />
    </section>
  )
}

export default CreateProduct