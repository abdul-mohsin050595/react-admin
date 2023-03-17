import React from 'react'
import { Routes, Route } from "react-router-dom"
import {
  Dashboard, Users, Products, Orders, SingleUser, CreateUser,
  OrderDetail, CreateProduct, UpdateProduct, Reviews, Categories,
  CatProduct,
  CategoryDetail,
  UpdateReview,

} from "../Pages";

function Allroutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard />} />
      <Route path='orders' element={<Orders />} />
      <Route path='orders/:orderId' element={<OrderDetail />} />
      <Route path='products' element={<Products />} />
      <Route path='products/create' element={<CreateProduct />} />
      <Route path='products/:productId' element={<UpdateProduct />} />
      <Route path='customers' element={<Users />} />
      <Route path='customers/:userId' element={<SingleUser />} />
      <Route path='customers/create' element={< CreateUser />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='reviews/:reviewId' element={<UpdateReview />} />
      <Route path='categories' element={<Categories />} />
      <Route path='categories/products' element={<CatProduct />} />
      <Route path='categories/:categoryId' element={<CategoryDetail />} />
      <Route path='/*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default Allroutes