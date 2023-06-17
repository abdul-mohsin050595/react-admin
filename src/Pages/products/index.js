import * as React from "react";

const Products = React.lazy(() => import("./Products"));
const CreateProduct = React.lazy(() => import("./CreateProduct"));
const UpdateProduct = React.lazy(() => import("./UpdateProduct"));

export { Products, CreateProduct, UpdateProduct };
