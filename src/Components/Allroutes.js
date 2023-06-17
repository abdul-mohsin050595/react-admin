import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "../Pages";
import Loading from "./Loading/Loading";
import NotFound from "./NotFound/NotFound";

function Allroutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path="/" element={<Pages.Dashboard />} />
        <Route path="orders" element={<Pages.Orders />} />
        <Route path="orders/:orderId" element={<Pages.OrderDetail />} />
        <Route path="products" element={<Pages.Products />} />
        <Route path="products/create" element={<Pages.CreateProduct />} />
        <Route path="products/:productId" element={<Pages.UpdateProduct />} />
        <Route path="customers" element={<Pages.Users />} />
        <Route path="customers/:userId" element={<Pages.SingleUser />} />
        <Route path="customers/create" element={<Pages.CreateUser />} />
        <Route path="reviews" element={<Pages.Reviews />} />
        <Route path="reviews/:reviewId" element={<Pages.UpdateReview />} />
        <Route path="categories" element={<Pages.Categories />} />
        <Route path="categories/products" element={<Pages.CatProduct />} />
        <Route
          path="categories/:categoryId"
          element={<Pages.CategoryDetail />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Allroutes;
