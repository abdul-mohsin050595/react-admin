import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from '../../Redux/Actions/productAction';
// import ReactPaginate from 'react-paginate';
import ProductTable from './ProductTable';
import "./product.css"

function Products() {
  const { products, loading } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  console.log(products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const navigateToCreate = () => {
    navigate("/products/create")
  }
  return (
    <section>
      {
        loading ? <h1>Loading</h1>
          : (
            <div>
              <div className='products'>
                <div className='create_btn'>
                  <button onClick={navigateToCreate}>+ Create</button>
                </div>
                <ProductTable products={products} />
              </div>
            </div>
          )
      }
    </section>
  )
}

export default Products